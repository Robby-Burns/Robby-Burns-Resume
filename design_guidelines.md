# Design Guidelines for Robby Burns Portfolio

## Design Approach
**Reference-Based:** Drawing inspiration from modern portfolio sites like Linear, Stripe, and minimalist agency portfolios, emphasizing clean layouts with purposeful whitespace and Pacific Northwest aesthetic.

## Color Palette
- **Primary:** Deep forest green (#1e3a2e, #2d5a45)
- **Secondary:** Slate gray (#475569, #64748b)
- **Accent:** Navy blue (#1e3a5f, #334155)
- **Neutrals:** Crisp white (#ffffff), light gray (#f8fafc)
- **Backgrounds:** Deep slate or forest green gradients for hero

## Typography
- **Primary Font:** Inter or Roboto (Google Fonts)
- **Hierarchy:**
  - Hero headline: 4xl-6xl, bold (700-800)
  - Section titles: 3xl-4xl, semibold (600)
  - Narrative/editorial text: lg-xl, normal (400), max-width 65ch
  - Body text: base-lg, normal (400)
  - Stats/cards: sm-base, medium (500)

## Layout System
**Spacing:** Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- Section padding: py-16 to py-24
- Container max-width: max-w-6xl for content, max-w-7xl for full sections
- Card spacing: gap-6 to gap-8

## Component Library

### 1. Hero Section
- Full viewport height (min-h-screen)
- Deep forest green to slate gradient background
- Centered content with vertical centering
- Large, bold headline with generous line-height
- Subtitle with slightly muted color
- Primary CTA button with smooth scroll behavior
- No hero image - gradient background only

### 2. Narrative Section ("From the Field to the Future")
- Centered editorial layout
- Max-width 65ch for optimal readability
- Generous vertical spacing (py-20 to py-24)
- Section title above content block
- White or light background for contrast

### 3. Tech Stack Grid
- Horizontal grid layout: 3-4 columns on desktop, 2 on tablet, 1 on mobile
- Badge/card components with icons from Lucide React
- Technology names: Python, OpenAI/LLMs, LangChain, SQL, Tableau, Jira, Replit
- Icons with subtle hover effects
- Cards with subtle borders and light shadows

### 4. Interactive Chatbot Section
- Prominent section with distinct visual treatment
- Headline and sub-headline hierarchy
- Styled container with defined border (2px) and shadow
- Placeholder space for iframe integration (min-height: 500px)
- Contrasting background to draw attention

### 5. About Me & Stats (Two-Column Layout)
- Desktop: 60/40 split (text left, stats right)
- Mobile: Stack vertically
- Left: Personal bio text, conversational tone
- Right: Grid of Quick Stats cards (2 columns on desktop, 1 on mobile)
  - Cards include: Current Project, Weekend Habitat, Team Allegiances, Past Life, Fun Fact
- Cards with subtle backgrounds and borders

### 6. Footer
- Simple, clean layout
- Copyright text on left
- Social links on right (LinkedIn, GitHub, Email icons from Lucide React)
- Horizontal layout on desktop, stacked on mobile
- Muted text colors

## Animations (Framer Motion - Minimal)
- Fade-in on scroll for section entries
- Subtle scale on hover for tech stack badges
- Smooth scroll behavior for CTA button
- Keep animations understated and professional

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Images
**No images required** - This design uses gradients, colors, and typography to create visual interest. The Pacific Northwest aesthetic is conveyed through the color palette rather than imagery.