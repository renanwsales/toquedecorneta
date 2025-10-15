// Arquivo de exemplo para configuração do AdSense
// Copie este arquivo para config.js e configure com seus dados reais

const AD_SENSE_CONFIG = {
    // Seu Client ID do AdSense (ex: ca-pub-1234567890123456)
    clientId: 'ca-pub-SEU_CLIENT_ID_AQUI',
    
    // Seu AdSense ID para ads.txt (ex: f08c47fec0942fa0)
    adsenseId: 'SEU_AD_SENSE_ID_AQUI',
    
    // Configurações de contato
    contact: {
        email: 'seu-email@exemplo.com',
        linkedin: 'https://www.linkedin.com/in/seu-perfil/',
        github: 'https://github.com/seu-usuario'
    },
    
    // Configurações do site
    site: {
        domain: 'seudominio.com.br',
        title: 'Seu Site'
    }
};

// Função para obter o Client ID
function getAdSenseClientId() {
    return AD_SENSE_CONFIG.clientId;
}

// Função para obter o AdSense ID
function getAdSenseId() {
    return AD_SENSE_CONFIG.adsenseId;
}

// Função para obter email de contato
function getContactEmail() {
    return AD_SENSE_CONFIG.contact.email;
}

// Função para obter LinkedIn
function getLinkedInUrl() {
    return AD_SENSE_CONFIG.contact.linkedin;
}

// Função para obter GitHub
function getGitHubUrl() {
    return AD_SENSE_CONFIG.contact.github;
}

// Função para obter domínio
function getSiteDomain() {
    return AD_SENSE_CONFIG.site.domain;
}

// Função para obter título do site
function getSiteTitle() {
    return AD_SENSE_CONFIG.site.title;
}
