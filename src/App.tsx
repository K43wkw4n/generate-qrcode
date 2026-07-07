import { useEffect, useMemo, useRef, useState } from 'react'
import QRCodeStyling from 'qr-code-styling'
import {
  App,
  Button,
  Card,
  ColorPicker,
  ConfigProvider,
  Input,
  Layout,
  Select,
  Slider,
  Space,
  Switch,
  Upload,
  theme,
} from 'antd'
import { ClearOutlined, DownloadOutlined, QrcodeOutlined, UploadOutlined } from '@ant-design/icons'
import type { Color } from 'antd/es/color-picker'
import './App.css'

const { Content } = Layout

type DotStyle = 'square' | 'dots' | 'rounded' | 'classy' | 'classy-rounded' | 'extra-rounded'
type CornerStyle = 'dot' | 'square' | 'extra-rounded' | 'rounded' | 'dots' | 'classy' | 'classy-rounded'
type Language = 'en' | 'th'

const translations = {
  en: {
    title: 'QR Studio — Gen QR Code Free',
    heroTitle: 'Gen QR Code in seconds - Free & Easy',
    heroSubtitle: 'Gen QR code free with high-resolution quality. Customize colors, shapes, and add center logo — perfect for print and web. Fast, secure, no signup needed.',
    placeholder: 'Paste a URL, text, or any content to generate a QR code',
    autoUpdate: 'Auto update',
    generate: 'Generate QR',
    clear: 'Reset',
    bodyShape: 'Body shape',
    eyeFrame: 'Eye frame shape',
    eyeBall: 'Eye ball shape',
    foreground: 'Foreground',
    background: 'Background',
    preview: 'Preview',
    empty: 'Enter content to preview your QR code',
    downloadPng: 'PNG',
    downloadJpg: 'JPG',
    downloadSvg: 'SVG',
    downloadRequired: 'Generate a QR code first',
    downloaded: 'QR code downloaded',
    ready: 'Ready to scan',
    logoTitle: 'Center Logo (Optional)',
    uploadHint: 'Choose your logo',
    uploadSubtitle: 'Drag and drop or tap to select',
    uploadFormats: 'Supports: PNG, JPG, GIF, SVG',
    uploadCompatible: 'Works on desktop, tablet & mobile',
    currentLogo: 'Current Logo:',
    removeLogo: 'Remove Logo',
    logoSize: 'Logo Size',
    language: 'Language',
  },
  th: {
    title: 'สตูดิโอ QR — Gen QR Code ฟรี',
    heroTitle: 'Gen QR Code ฟรี ใน 1 วินาที ไม่ต้องสมัคร',
    heroSubtitle: 'Gen QR code ฟรี ด้วย QR Studio ที่เร็ว ปลอดภัย และใช้งานง่าย ปรับแต่งสี รูปร่าง เพิ่มโลโก้ และดาวน์โหลด PNG, JPG, SVG ได้ทันที',
    placeholder: 'วาง URL ข้อความ หรือเนื้อหาที่ต้องการแปลงเป็น QR Code',
    autoUpdate: 'อัปเดตอัตโนมัติ',
    generate: 'สร้าง QR',
    clear: 'ล้างค่า',
    bodyShape: 'รูปร่างลำตัว',
    eyeFrame: 'รูปร่างกรอบตา',
    eyeBall: 'รูปร่างลูกตา',
    foreground: 'สีหลัก',
    background: 'สีพื้นหลัง',
    preview: 'ตัวอย่าง',
    empty: 'ใส่เนื้อหาเพื่อดูตัวอย่าง QR Code',
    downloadPng: 'PNG',
    downloadJpg: 'JPG',
    downloadSvg: 'SVG',
    downloadRequired: 'สร้าง QR Code ก่อนดาวน์โหลด',
    downloaded: 'ดาวน์โหลด QR Code แล้ว',
    ready: 'พร้อมสแกน',
    logoTitle: 'โลโก้ตรงกลาง (ไม่บังคับ)',
    uploadHint: 'ลากมาวางหรือแตะเพื่อเลือก รูปโลโก้',
    uploadSubtitle: 'ลากมาวางหรือแตะเพื่อเลือก',
    uploadFormats: 'รองรับ: PNG, JPG, GIF, SVG',
    uploadCompatible: 'ใช้งานได้บนคอม แท็บเล็ต และมือถือ',
    currentLogo: 'โลโก้ปัจจุบัน:',
    removeLogo: 'ลบโลโก้',
    logoSize: 'ขนาดโลโก้',
    language: 'ภาษา',
  },
}

const getBodyShapeOptions = (lang: Language): Array<{ label: string; value: DotStyle }> => {
  if (lang === 'th') {
    return [
      { label: 'สี่เหลี่ยม', value: 'square' },
      { label: 'จุด', value: 'dots' },
      { label: 'มีปุ่ม', value: 'rounded' },
      { label: 'คลาสสิก', value: 'classy' },
      { label: 'คลาสสิกมีปุ่ม', value: 'classy-rounded' },
      { label: 'มีปุ่มพิเศษ', value: 'extra-rounded' },
    ]
  }
  return [
    { label: 'Square', value: 'square' },
    { label: 'Dots', value: 'dots' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Classy', value: 'classy' },
    { label: 'Classy Rounded', value: 'classy-rounded' },
    { label: 'Extra Rounded', value: 'extra-rounded' },
  ]
}

const getCornerOptions = (lang: Language): Array<{ label: string; value: CornerStyle }> => {
  if (lang === 'th') {
    return [
      { label: 'สี่เหลี่ยม', value: 'square' },
      { label: 'จุด', value: 'dot' },
      { label: 'มีปุ่ม', value: 'rounded' },
      { label: 'จุดหลายตัว', value: 'dots' },
      { label: 'คลาสสิก', value: 'classy' },
      { label: 'คลาสสิกมีปุ่ม', value: 'classy-rounded' },
      { label: 'มีปุ่มพิเศษ', value: 'extra-rounded' },
    ]
  }
  return [
    { label: 'Square', value: 'square' },
    { label: 'Dot', value: 'dot' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Dots', value: 'dots' },
    { label: 'Classy', value: 'classy' },
    { label: 'Classy Rounded', value: 'classy-rounded' },
    { label: 'Extra Rounded', value: 'extra-rounded' },
  ]
}



function getInitialLanguage(): Language {
  if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('th')) {
    return 'th'
  }
  return 'en'
}

function getColorValue(value: Color | string) {
  if (typeof value === 'string') return value
  return value.toHexString?.() || '#111827'
}

function QRStudioContent() {
  const { message } = App.useApp()
  const [text, setText] = useState('https://qrcode.potamiya.com')
  const [autoUpdate, setAutoUpdate] = useState(true)
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const [foregroundColor, setForegroundColor] = useState<string>('#111827')
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff')
  const [dotStyle, setDotStyle] = useState<DotStyle>('rounded')
  const [eyeFrameShape, setEyeFrameShape] = useState<CornerStyle>('extra-rounded')
  const [eyeBallShape, setEyeBallShape] = useState<CornerStyle>('dot')
  const [logoImage, setLogoImage] = useState<string | null>(null)
  const [logoSize, setLogoSize] = useState<number>(0.25)
  const qrRef = useRef<HTMLDivElement>(null)
  const qrCodeRef = useRef<QRCodeStyling | null>(null)

  const t = useMemo(() => translations[language], [language])

  const renderQrCode = () => {
    if (!qrRef.current) return; // Defensive check

    if (!text.trim()) {
      qrRef.current.innerHTML = '';
      qrCodeRef.current = null;
      return;
    }

    const options = {
      width: 1000,
      height: 1000,
      data: text.trim(),
      margin: 10,
      type: 'canvas' as const,
      qrOptions: { errorCorrectionLevel: 'H' as const },
      dotsOptions: {
        color: foregroundColor,
        type: dotStyle,
      },
      backgroundOptions: {
        color: backgroundColor,
      },
      cornersSquareOptions: {
        color: foregroundColor,
        type: eyeFrameShape,
      },
      cornersDotOptions: {
        color: foregroundColor,
        type: eyeBallShape,
      },
      image: logoImage ?? undefined,
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: logoSize,
        margin: 10,
        crossOrigin: 'anonymous' as const,
      },
    };

    const instance = qrCodeRef.current ?? new QRCodeStyling(options);
    qrCodeRef.current = instance;
    instance.update(options);

    if (qrRef.current.children.length === 0) {
      instance.append(qrRef.current);
    }
  };

  useEffect(() => {
    if (autoUpdate && text.trim()) {
      renderQrCode();
    } else if (!text.trim()) {
      if (qrRef.current) {
        qrRef.current.innerHTML = '';
      }
      qrCodeRef.current = null;
    }
  }, [autoUpdate, text, foregroundColor, backgroundColor, dotStyle, eyeFrameShape, eyeBallShape, logoImage, logoSize]);

  const handleGenerate = () => {
    if (!text.trim()) {
      message.warning(language === 'th' ? 'กรุณาใส่ข้อความหรือลิงก์ก่อนสร้าง QR' : 'Please enter some content to generate a QR code')
      return
    }
    renderQrCode()
  }

  const handleDownload = (format: 'png' | 'jpg' | 'svg') => {
    if (!qrCodeRef.current) {
      message.warning(t.downloadRequired)
      return
    }

    const extension = format === 'jpg' ? 'jpeg' : format
    qrCodeRef.current.download({ name: 'qr-code', extension })
    message.success(t.downloaded)
  }

  const clearAll = () => {
    setText('')
    setAutoUpdate(true)
    setForegroundColor('#111827')
    setBackgroundColor('#ffffff')
    setDotStyle('rounded')
    setEyeFrameShape('extra-rounded')
    setEyeBallShape('dot')
    setLogoImage(null)
    setLogoSize(0.25)
    qrCodeRef.current = null
    if (qrRef.current) qrRef.current.innerHTML = ''
  }

  const handleLogoUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      setLogoImage(typeof reader.result === 'string' ? reader.result : null)
    }
    reader.readAsDataURL(file)
    return false
  }

  return (
    <Layout className="app-shell">
      <Content className="app-content">
        <section className="hero-card frame-card">
          <div className="hero-copy">
            <div className="brand-pill">
              <QrcodeOutlined />
              <span>{t.title}</span>
            </div>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroSubtitle}</p>
          </div>
          <div className="hero-actions">
            <Space wrap>
              <button className="pill-toggle" onClick={() => setLanguage(language === 'en' ? 'th' : 'en')}>
                <span>{t.language}</span>
                <strong>{language === 'en' ? 'TH' : 'EN'}</strong>
              </button>
            </Space>
          </div>
        </section>

        <div className="workspace-grid">
          <Card className="panel-card frame-card">
            <div className="section-heading">
              <div>
                <h2>{t.title}</h2>
                <p>{t.ready}</p>
              </div>
              <Switch checked={autoUpdate} onChange={setAutoUpdate} checkedChildren={t.autoUpdate} unCheckedChildren={t.autoUpdate} />
            </div>

            <Input.TextArea
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t.placeholder}
            />

            <div className="action-row">
              <Button type="primary" onClick={handleGenerate}>
                {t.generate}
              </Button>
              <Button icon={<ClearOutlined />} onClick={clearAll}>
                {t.clear}
              </Button>
            </div>

            <div className="control-grid">
              <div className="field field-wide">
                <label>{t.bodyShape}</label>
                <Select value={dotStyle} onChange={(value) => setDotStyle(value as DotStyle)} options={getBodyShapeOptions(language)} />
              </div>

              <div className="field">
                <label>{t.eyeFrame}</label>
                <Select value={eyeFrameShape} onChange={(value) => setEyeFrameShape(value as CornerStyle)} options={getCornerOptions(language)} />
              </div>

              <div className="field">
                <label>{t.eyeBall}</label>
                <Select value={eyeBallShape} onChange={(value) => setEyeBallShape(value as CornerStyle)} options={getCornerOptions(language)} />
              </div>

              <div className="field">
                <label>{t.foreground}</label>
                <ColorPicker value={foregroundColor} onChange={(value) => setForegroundColor(getColorValue(value))} showText />
              </div>

              <div className="field">
                <label>{t.background}</label>
                <ColorPicker value={backgroundColor} onChange={(value) => setBackgroundColor(getColorValue(value))} showText />
              </div>

              <div className="field field-wide">
                <label>{t.logoTitle}</label>

                {logoImage ? (
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{
                      padding: '28px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '14px',
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #fafbfc 0%, #f8f9fa 100%)'
                    }}>
                      <p style={{ fontSize: '12px', color: '#666', marginBottom: '16px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t.currentLogo}</p>
                      <img src={logoImage} alt="Current logo" style={{ maxWidth: '180px', maxHeight: '180px', marginBottom: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} />
                      <div>
                        <Button danger onClick={() => setLogoImage(null)} style={{ width: '100%' }}>
                          {t.removeLogo}
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (<Upload.Dragger
                  beforeUpload={handleLogoUpload}
                  showUploadList={false}
                  accept="image/*"
                  maxCount={1}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '32px 24px'
                  }}>
                    <UploadOutlined style={{ fontSize: '56px', marginBottom: '20px', display: 'block', color: '#9ca3af' }} />
                    <p style={{ margin: '12px 0', fontSize: '16px', fontWeight: 'bold', color: '#0f172a' }}>{t.uploadHint}</p>
                    <hr style={{ margin: '14px 0', border: 'none', borderTop: '1px solid #e5e7eb', width: '100%' }} />
                    <p style={{ fontSize: '12px', color: '#a0aec0', margin: '6px 0' }}>{t.uploadFormats}</p>
                  </div>
                </Upload.Dragger>)}
              </div>
            </div>
          </Card>

          <Card className="preview-card frame-card">
            <div className="preview-header">
              <div>
                <h2>{t.preview}</h2>
                <p>{t.ready}</p>
              </div>
              <Space wrap>
                <Button icon={<DownloadOutlined />} onClick={() => handleDownload('png')}>
                  {t.downloadPng}
                </Button>
                <Button icon={<DownloadOutlined />} onClick={() => handleDownload('jpg')}>
                  {t.downloadJpg}
                </Button>
                <Button icon={<DownloadOutlined />} onClick={() => handleDownload('svg')}>
                  {t.downloadSvg}
                </Button>
              </Space>
            </div>

            {logoImage && (
              <div className="field field-wide">
                <label>{t.logoSize}</label>
                <Slider
                  min={0.1}
                  max={0.5}
                  step={0.05}
                  value={logoSize}
                  onChange={setLogoSize}
                  marks={{
                    0.1: '10%',
                    0.2: '20%',
                    0.3: '30%',
                    0.4: '40%',
                    0.5: '50%',
                  }}
                />
              </div>
            )}

            <div className="preview-meta">
              <span>{language === 'th' ? 'ความละเอียดสูง' : 'High Resolution'}</span>
            </div>

            <div className="preview-surface">

              <div ref={qrRef} className="qr-stage" />
              {!text.trim() && (
                <div className="empty-state">
                  <QrcodeOutlined className="empty-icon" />
                  <h3>{t.empty}</h3>
                </div>
              )}
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  )
}

function AppWrapper() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#2563eb',
          borderRadius: 16,
          colorBgBase: '#f8fafc',
          colorTextBase: '#0f172a',
        },
      }}
    >
      <App>
        <QRStudioContent />
      </App>
    </ConfigProvider>
  )
}

export default AppWrapper
