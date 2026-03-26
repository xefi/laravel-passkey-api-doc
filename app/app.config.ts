export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      neutral: 'zinc'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Laravel Passkey API'
  },
  header: {
    title: 'Laravel Passkey API',
    to: '/',
    logo: {
      alt: 'Xefi',
      light: '/xefi-light.svg',
      dark: '/xefi-dark.svg'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/xefi/laravel-passkeys-api',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()} Xefi`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/xefi/laravel-passkeys-api',
      'target': '_blank',
      'aria-label': 'Laravel Passkey API on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/xefi/laravel-passkeys-api-doc/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/xefi/laravel-passkeys-api',
        target: '_blank'
      }]
    }
  }
})
