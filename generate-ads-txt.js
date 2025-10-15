// Script para gerar ads.txt com as configurações centralizadas
// Execute: node generate-ads-txt.js

const fs = require('fs');
const path = require('path');

// Importa a configuração
const configPath = path.join(__dirname, 'assets', 'js', 'config.js');
const configContent = fs.readFileSync(configPath, 'utf8');

// Extrai o clientId e adsenseId da configuração
const clientIdMatch = configContent.match(/clientId:\s*['"`]([^'"`]+)['"`]/);
const adsenseIdMatch = configContent.match(/adsenseId:\s*['"`]([^'"`]+)['"`]/);

if (clientIdMatch && adsenseIdMatch) {
    const clientId = clientIdMatch[1];
    const adsenseId = adsenseIdMatch[1];
    
    // Remove 'ca-pub-' do clientId para o ads.txt
    const pubId = clientId.replace('ca-pub-', '');
    
    // Gera o conteúdo do ads.txt
    const adsTxtContent = `google.com, pub-${pubId}, DIRECT, ${adsenseId}`;
    
    // Escreve o arquivo
    fs.writeFileSync('ads.txt', adsTxtContent);
    
    console.log('✅ ads.txt gerado com sucesso!');
    console.log('Conteúdo:', adsTxtContent);
} else {
    console.error('❌ Erro: Não foi possível extrair as configurações do config.js');
    console.log('Certifique-se de que os valores estão configurados corretamente.');
}
