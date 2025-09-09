  document.querySelector(".search_box").addEventListener("submit", function (e) {
    e.preventDefault(); // impede o reload da página

    const valor = document.getElementById("pesquisa").value.trim().toLowerCase();

    // Mapeamento dos nomes para páginas
    const mapa = {
      // Feiticeiros
      "gojo": "Feiticeiros page/Gojo_page.html",
      "satoru gojo": "Feiticeiros page/Gojo_page.html",
      "geto": "Feiticeiros page/geto_page.html",
      "itadori": "Feiticeiros page/itadori_page.html",
      "yuji itadori": "Feiticeiros page/itadori_page.html",
      "megumi": "Feiticeiros page/megumi_page.html",
      "nobara": "Feiticeiros page/nobara_page.html",
      "hakari": "Feiticeiros page/hakari_page.html",
      "kenjaku": "Feiticeiros page/kenjaku_page.html",
      "nanami": "Feiticeiros page/nanami_page.html",
      "yuta": "Feiticeiros page/yuta_page.html",
      "maki": "Feiticeiros page/maki_page.html",

      // Maldições
      "sukuna": "Maldições page/sukuna_page.html",
      "mahito": "Maldições page/mahito_page.html",
      "jogo": "Maldições page/jogo_page.html",
      "hanami": "Maldições page/hanami_page.html",
      "dagon": "Maldições page/dagon_page.html",
      "choso": "Maldições page/choso_page.html",
      "rika": "Maldições page/rika_page.html",
      "judgeman": "Maldições page/judgeman_page.html",
      "mahoraga": "Maldições page/mahoraga_page.html",
      "kurourushi": "Maldições page/kurourushi_page.html"
    };

    if (mapa[valor]) {
      window.open(mapa[valor], "_blank");
    } else {
      alert("Personagem não encontrado! Verifique o nome digitado.");
    }
  });