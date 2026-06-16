import { worker } from "./mocks/browser";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


async function enableMocking() {
  await worker.start();
}
enableMocking().then(() => {
  createRoot(
    document.getElementById("root")!
  ).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
