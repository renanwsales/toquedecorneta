// Configuração centralizada do AdSense
// Substitua pelos seus valores reais antes de usar em produção

const AD_SENSE_CONFIG = {
    // Seu Client ID do AdSense (ex: ca-pub-1234567890123456)
    clientId: 'ca-pub-8220840186059560',
    
    // Seu AdSense ID para ads.txt (ex: f08c47fec0942fa0)
    adsenseId: 'f08c47fec0942fa0',
    
    // Configurações de contato
    contact: {
        email: 'renanwsales@gmail.com',
        linkedin: 'https://www.linkedin.com/in/renan-sales/',
        github: 'https://github.com/renanwsales'
    },
    
    // Configurações do site
    site: {
        domain: 'toquedecorneta.com.br',
        title: 'Toque de Corneta'
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
