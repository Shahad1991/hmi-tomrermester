# Google Analytics Setup og Tracking Guide
# HMI Tømrermester

## 🔧 1. Grundlæggende opsætning

### Step 1: Opret Google Analytics konto
1. Gå til https://analytics.google.com/
2. Klik "Opret konto"
3. Vælg "For en virksomhed"
4. Udfyld virksomhedsoplysninger:
   - Kontonavn: "HMI Tømrermester"
   - Land: Danmark
   - Valuta: DKK

### Step 2: Opret property
1. Property navn: "HMI Tømrermester Website"
2. Rapporteringstidszone: Danmark
3. Valuta: Danske kroner
4. Vælg "Web"
5. Website URL: https://hmi-tomrermester.dk
6. Få dit **Measurement ID** (G-XXXXXXXXXX)

### Step 3: Opdater .env.local
```bash
NEXT_PUBLIC_GA_ID=G-DIT-REELLE-ID-HER
```

## 📊 2. Vigtige events der trackes automatisk

### Kontakt Events
- **Telefon klik**: Når kunder klikker på telefonnummer
- **Email klik**: Når kunder klikker på email
- **Kontaktformular**: Når formularen sendes succesfuldt

### Engagement Events  
- **Service sider**: Hvilke ydelser interesserer kunder mest
- **Instagram klik**: Social media engagement
- **Scroll depth**: Hvor meget læser brugerne (25%, 50%, 75%, 90%)

### Galleri Events (klar til implementation)
- **Billede klik**: Hvilke projekter interesserer kunder
- **Modal åbning**: Engagement med galleri

## 🎯 3. Vigtige målinger for dit business

### Conversion Tracking
I Google Analytics, fokuser på:

1. **Goals Setup** (Mål):
   - Kontaktformular submission
   - Telefon klik
   - Email klik
   - Tid på site > 2 minutter

2. **Enhanced Ecommerce** (tilbud tracking):
   - Track når kunder ser ydelser
   - Track hvilke services der er mest populære

### Key Performance Indicators (KPIs)
1. **Lead Generation**:
   - Antal kontaktformularer per måned
   - Telefon klik per måned  
   - Email klik per måned

2. **User Behavior**:
   - Mest besøgte ydelser
   - Gennemsnitlig session varighed
   - Bounce rate per side

3. **Traffic Sources**:
   - Organisk søgning (Google)
   - Direkte trafik
   - Social media (Instagram)

## 📈 4. Custom dashboards anbefaling

### Business Overview Dashboard
- Samlede leads (formular + telefon + email)
- Mest populære ydelser
- Traffic kilder
- Mobile vs desktop brugere

### Lead Quality Dashboard  
- Conversion rate per trafik kilde
- Gennemsnitlig session varighed før conversion
- Mest værdifulde sider for conversions

## 🔍 5. Google Search Console integration

1. Link Google Analytics med Search Console
2. Se hvilke søgeord driver trafik
3. Monitor click-through rates
4. Identificer nye keyword muligheder

## 🚀 6. Avancerede tracking muligheder

### Heatmap og Session Recording
Overvej at tilføje:
- **Hotjar** eller **Microsoft Clarity** for at se brugeradfærd
- **Google Optimize** for A/B testing

### Conversion Value Tracking
Sæt estimeret værdi på leads:
- Kontaktformular: 1000 DKK (potentiel kunde)
- Telefon klik: 1500 DKK (højere intent)
- Email klik: 500 DKK (lavere intent)

## 📊 7. Månedlige rapporter anbefaling

### Hver måned, tjek:
1. **Antal leads**: Target 20+ per måned
2. **Top performing sider**: Fokuser marketing her
3. **Traffic growth**: MoM vækst i organisk trafik
4. **Mobile performance**: 60%+ af trafik er mobile

### Kvartalsvis gennemgang:
1. **ROI på marketing**: Cost per lead
2. **Seasonal trends**: Hvilke måneder er bedst
3. **Content performance**: Hvilke sider konverterer bedst
4. **Competitor analysis**: Sammenlign med konkurrenter

## 🛠️ 8. Troubleshooting

### Hvis Google Analytics ikke virker:
1. Tjek at NEXT_PUBLIC_GA_ID er korrekt i .env.local
2. Åbn browser developer tools og se efter gtag errors
3. Brug Google Analytics DebugView til real-time testing

### Test tracking:
1. Åbn din hjemmeside
2. Klik på telefonnummer (se console for "GA: Phone click tracked")
3. Udfyld kontaktformular (se console for "GA: Contact form...")
4. Tjek i Google Analytics Real-time reports

## 💡 Business Intelligence Tips

### Optimér baseret på data:
1. **Hvis carport har høj traffic men lav conversion**: Forbedre call-to-action
2. **Hvis mobil bounce rate er høj**: Optimér mobile experience  
3. **Hvis direkte trafik er lav**: Fokuser på brand awareness
4. **Hvis organic search er lav**: Forbedre SEO

### Lead scoring:
- Email klik: 1 point
- Service side visit: 2 points  
- Telefon klik: 5 points
- Formular udfyldelse: 10 points

Dette hjælper dig med at prioritere opfølgning på leads.
