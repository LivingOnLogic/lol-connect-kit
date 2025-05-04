# 🔌 lol-connect-kit

**Connect UI and wallet integration layer** for Living On Logic applications.  
Provides secure, themeable, and modular connection components for MCP-aware dApps.

---

## ✨ Overview

`lol-connect-kit` is a headless React toolkit for authenticating users and agents to Living On Logic-enabled applications. It manages:

- Wallet connection (EVM, injected, mobile)
- MCP-aware session context
- Wallet-based identity
- UI modals and styling

---

## 🔐 Features

- 🔌 Plug-and-play `ConnectButton`
- 🧠 Agent-aware connection context
- 🔄 Auto-reconnect with local storage
- 💬 UI hooks for MCP status and address
- 🎨 Themeable, minimal pixel-styled modal

---

## 🧱 Components

| Component       | Description                                        |
|----------------|----------------------------------------------------|
| `ConnectButton` | Wallet connect + agent toggle modal                |
| `MCPProvider`   | Context provider for MCP registry + auth           |
| `useWallet()`   | Hook to access connection state                    |
| `useAgent()`    | Returns current agent ID and role (if enabled)     |

---

## 📦 Project Structure

```
/src
  /components       → Connect UI and modal logic
  /hooks            → useWallet, useAgent, useMCP
  /context          → React context for provider + state
```

---

## 🛠 Usage

### Install

```bash
npm install lol-connect-kit
```

### In your app:

```tsx
import { MCPProvider, ConnectButton } from "lol-connect-kit";

<MCPProvider>
  <ConnectButton />
</MCPProvider>
```

---

## 🎨 Customization

You can override styles via Tailwind classes or pass in your own modal content with:

```tsx
<ConnectButton customModal={<MyCustomModal />} />
```

---

## 🧪 Dev Setup

```bash
git clone https://github.com/LivingOnLogic/lol-connect-kit.git
cd lol-connect-kit
npm install
npm run dev
```

---

## 🔄 Future Additions

- WalletConnect 2.0 support
- ENS + agent resolution
- Social login plugin
