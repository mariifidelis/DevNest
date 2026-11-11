"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { iniciarPagina, limparPagina } from "@/lib/devnest";

export default function Comportamentos() {
  // O Next.js informa o endereço da página atual.
  const caminho = usePathname();

  // useEffect permite usar document depois que o React mostra a página.
  // Quando o endereço muda, as funções precisam ser ligadas à nova página.
  useEffect(
    function () {
      if (caminho === "/perfil") {
        document.body.className = "perfilpg";
      } else if (caminho === "/contratofechado") {
        document.body.className = "contfechado";
        // Este fundo já estava no HTML original do contrato fechado.
        document.body.style.background =
          "linear-gradient(160deg, #0a1761, #050b33)";
        document.body.style.display = "flex";
        document.body.style.flexDirection = "column";
        document.body.style.minHeight = "100vh";
      } else if (caminho === "/login") {
        document.body.className = "";
      } else {
        document.body.className = "topbar";
      }

      iniciarPagina();

      // O retorno é executado quando saímos da página.
      return function () {
        limparPagina();
        document.body.className = "";
        document.body.style.background = "";
        document.body.style.display = "";
        document.body.style.flexDirection = "";
        document.body.style.minHeight = "";
      };
    },
    [caminho],
  );

  // Este componente cuida dos eventos e não desenha nada na tela.
  return null;
}
