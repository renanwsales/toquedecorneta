# 🎺 Toque de Corneta

Site para auxiliar alunos e instrutores com os principais toques de corneta usados em formações e cerimônias militares.

## 📋 Sobre

O **Toque de Corneta** é uma ferramenta web simples e rápida que permite acessar instantaneamente os 17 toques mais utilizados em formações militares. Desenvolvido com foco na simplicidade e compatibilidade móvel.

### ✨ Características

- 🎵 **17 toques essenciais** com áudio de alta qualidade
- 📱 **Totalmente responsivo** - funciona perfeitamente no celular
- ⚡ **Carregamento rápido** - otimizado para performance
- 🎯 **Interface intuitiva** - fácil de usar durante estudos
- 📊 **Barra de progresso** - controle de reprodução com seek
- 🔍 **SEO otimizado** - preparado para AdSense
- 🛡️ **LGPD compliant** - banner de consentimento de cookies
- ⚙️ **Configuração centralizada** - um arquivo para todas as configurações
- 🔒 **Segurança** - arquivos sensíveis protegidos
- 🚀 **Pronto para produção** - hospedagem e monetização

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Layout responsivo e animações
- **JavaScript** - Controle de áudio e interações
- **Hostinger** - Hospedagem profissional
- **Google AdSense** - Monetização

## 📁 Estrutura do Projeto

```
toque-de-corneta/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── script.js
│   │   ├── config.example.js (renomear para config.js)
│   │   └── cookie-consent.js
│   ├── images/
│   │   ├── favicon.png
│   │   ├── linkedin.svg
│   │   ├── github.svg
│   │   ├── atlas.jpeg
│   │   └── atlas1.jpeg
│   └── sounds/
│       ├── sentido.mp3
│       ├── descansar.mp3
│       ├── cobrir.mp3
│       ├── firme.mp3
│       └── ... (13 outros toques)
├── index.html
├── sobre.html
├── como-usar.html
├── guia.html
├── contato.html
├── faq.html
├── privacy.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── ads.txt (gerado automaticamente)
├── .htaccess
├── .gitignore
├── generate-ads-txt.js
├── LICENSE
└── README.md
```

## 🎵 Toques Incluídos

1. **Sentido** - Posição fundamental de atenção
2. **Descansar** - Postura de descanso
3. **Cobrir** - Ajuste de alinhamento
4. **Firme** - Retorno à posição de sentido
5. **Direita Volver** - Movimento 90° direita
6. **Esquerda Volver** - Movimento 90° esquerda
7. **Meia Volta Volver** - Giro 180°
8. **Apresentar Arma** - Saudação formal
9. **Ombro Arma** - Posição de arma ao ombro
10. **Descansar Arma** - Descanso com arma
11. **Ordinário Marche** - Início da marcha
12. **Marcar Passo** - Passos no lugar
13. **Alto** - Parada da marcha
14. **Olhar à Direita** - Continência de olhar
15. **Olhar Frente** - Retorno do olhar
16. **Em Direção à Direita** - Ajuste de direção
17. **Em Direção à Esquerda** - Ajuste de direção

## 🛠️ Instalação

### Pré-requisitos

- Navegador web moderno
- Servidor web (Apache/Nginx)
- Node.js (opcional, para gerar ads.txt automaticamente)

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/renanwsales/toque-de-corneta.git
   cd toque-de-corneta
   ```

2. **Configure suas informações:**
   ```bash
   # Copie o arquivo de exemplo
   cp assets/js/config.example.js assets/js/config.js
   
   # Edite com seus dados reais
   nano assets/js/config.js
   ```

3. **Gere o ads.txt automaticamente:**
   ```bash
   node generate-ads-txt.js
   ```

4. **Configure o servidor:**
   - Para Hostinger: faça upload dos arquivos via File Manager
   - Para servidor próprio: faça upload dos arquivos

5. **Configure o domínio:**
   - Configure DNS apontando para seu servidor
   - O arquivo `.htaccess` já está configurado para redirecionamentos

## 🎯 Uso

1. Acesse o site
2. Clique no toque desejado
3. Use a barra de progresso para navegar no áudio
4. Ajuste o volume do dispositivo

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Android, iOS
- ✅ Tablets e desktops

## 🔧 Configuração AdSense

O site está preparado para Google AdSense com:

- ✅ Conteúdo textual suficiente
- ✅ Política de Privacidade
- ✅ Sitemap XML
- ✅ Meta descriptions
- ✅ Estrutura SEO otimizada
- ✅ HTTPS obrigatório
- ✅ Redirecionamento www

### ⚙️ Configuração Local

**IMPORTANTE:** Antes de usar, configure suas informações pessoais:

1. **Configure o arquivo de configuração:**
   ```bash
   # Copie o arquivo de exemplo
   cp assets/js/config.example.js assets/js/config.js
   
   # Edite com seus dados reais
   nano assets/js/config.js
   ```
   
   **Configure os valores em `assets/js/config.js`:**
   ```javascript
   const AD_SENSE_CONFIG = {
       clientId: 'ca-pub-SEU_CLIENT_ID_AQUI',        // Seu Client ID do AdSense
       adsenseId: 'SEU_AD_SENSE_ID_AQUI',            // Seu AdSense ID
       contact: {
           email: 'seu-email@exemplo.com',            // Seu email
           linkedin: 'https://www.linkedin.com/in/seu-perfil/',
           github: 'https://github.com/seu-usuario'
       },
       site: {
           domain: 'seudominio.com.br',              // Seu domínio
           title: 'Seu Site'
       }
   };
   ```

2. **Gere o ads.txt automaticamente:**
   ```bash
   node generate-ads-txt.js
   ```

3. **Configure o domínio no .htaccess:**
   - Substitua `toquedecorneta.com.br` pelo seu domínio

**Vantagens da configuração centralizada:**
- ✅ **Um local só** para alterar todas as configurações
- ✅ **Geração automática** do ads.txt
- ✅ **Menos erros** de digitação
- ✅ **Manutenção** mais fácil
- ✅ **Segurança** - arquivo de configuração no .gitignore
- ✅ **Template** - arquivo de exemplo incluído



## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, SEO)
- **Carregamento:** < 2s
- **Tamanho:** < 500KB total
- **Cache:** Assets com cache de 1 mês

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Renan Sales**
- LinkedIn: [renan-sales](https://www.linkedin.com/in/renan-sales/)
- GitHub: [@renanwsales](https://github.com/renanwsales)
- Email: [renanwsales@gmail.com](mailto:renanwsales@gmail.com)

## 🌐 Site

🔗 **Acesse:** [www.toquedecorneta.com.br](https://www.toquedecorneta.com.br)

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**
