const security = {
  page_title: 'Security',
  title: 'Security',
  subtitle: 'Configure advanced protection against sophisticated attacks.',
  bot_protection: {
    title: 'Bot protection',
    description:
      'Enable CAPTCHA for sign-up, sign-in, and password recovery to block automated threats.',
    captcha: {
      title: 'CAPTCHA',
      placeholder: 'Select a CAPTCHA provider and set up integration.',
      add: 'Add CAPTCHA',
    },
    settings: 'Settings',
  },
  create_captcha: {
    setup_captcha: 'Setup CAPTCHA',
  },
  captcha_providers: {
    recaptcha_enterprise: {
      name: 'reCAPTCHA Enterprise',
      description:
        "Google's enterprise-grade CAPTCHA solution that provides advanced threat detection and detailed security analytics to protect your website from fraudulent activities.",
    },
    turnstile: {
      name: 'Cloudflare Turnstile',
      description:
        "Cloudflare's smart CAPTCHA alternative that provides non-intrusive bot protection while ensuring a seamless user experience without visual puzzles.",
    },
  },
  captcha_details: {
    back_to_security: 'Back to security',
    page_title: 'CAPTCHA details',
    check_readme: 'Check README',
    connection: 'Connection',
    description: 'Configure your captcha connections.',
    site_key: 'Site key',
    secret_key: 'Secret key',
    deletion_description: 'Are you sure you want to delete this CAPTCHA provider?',
    captcha_deleted: 'CAPTCHA provider deleted successfully',
    setup_captcha: 'Setup CAPTCHA',
  },
};

export default Object.freeze(security);
