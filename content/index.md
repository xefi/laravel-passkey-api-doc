---
seo:
  title: Laravel Passkeys API
  description: Add WebAuthn passkey authentication to your Laravel application in minutes.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
WebAuthn Passkeys [API]{.text-primary} for Laravel.

#description
A ready-to-use REST API for WebAuthn passkey authentication in your Laravel application. Drop-in endpoints for registration, verification, and authentication — no custom controllers needed.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/xefi/laravel-passkeys-api
  target: _blank
  ---
  View on GitHub
  :::

#default
  :::prose-pre
  ---
  code: |
    composer require xefi/laravel-passkey-api
    php artisan vendor:publish --tag=passkey-migrations
    php artisan migrate
  filename: Terminal
  ---

  ```bash [Terminal]
  composer require xefi/laravel-passkey-api
  php artisan vendor:publish --tag=passkey-migrations
  php artisan migrate
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Everything you need for passwordless auth

#features
  :::u-page-feature
  ---
  icon: i-lucide-fingerprint
  ---
  #title
  WebAuthn / FIDO2

  #description
  Full WebAuthn specification support — hardware security keys, Touch ID, Face ID, Windows Hello, and more.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  ---
  #title
  Token Authentication

  #description
  Returns an API token on successful passkey authentication, ready to use with your preferred authentication guard.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-zap
  ---
  #title
  Ready-to-use API

  #description
  Drop-in REST API endpoints for registration, verification, and authentication. No custom controllers needed.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-settings-2
  ---
  #title
  Configurable

  #description
  Customize the authentication middleware, challenge timeout, and challenge length through a simple configuration file.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-database
  ---
  #title
  Eloquent Model

  #description
  Passkeys are stored in your database using an Eloquent model. The HasPasskeys trait wires everything up automatically.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-key-round
  ---
  #title
  ES256 & RS256

  #description
  Supports both ES256 (Elliptic Curve) and RS256 (RSA) public key algorithms for maximum authenticator compatibility.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Get started
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: View on GitHub
      to: 'https://github.com/xefi/laravel-passkeys-api'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: Ready to go passwordless?
  description: Add passkey authentication to your Laravel app in a few commands.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
