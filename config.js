import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['595975726335', 'The-SimpleBot-MD 🍧', true], ['595976126756', '👑 𝐎𝐰𝐧𝐞𝐫 👑', true], ['595994825505']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['595986224522']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ ['595976126756']]

//Aqui encuentras los nombres del bot 
global.packname = ''
global.author = '𝑻𝒉𝒆-𝑺𝒊𝒎𝒑𝒍𝒆𝑩𝒐𝒕-𝑴𝑫'
global.wm = '𝑻𝒉𝒆-𝑺𝒊𝒎𝒑𝒍𝒆𝑩𝒐𝒕-𝑴𝑫'
global.wm2 = '𝑻𝒉𝒆-𝑺𝒊𝒎𝒑𝒍𝒆𝑩𝒐𝒕-𝑴𝑫'
global.azami = '𝐷𝑎𝑣𝑖𝑑-𝑂𝐹𝐶'
global.cb = '𝑻𝒉𝒆-𝑺𝒊𝒎𝒑𝒍𝒆𝑩𝒐𝒕-𝑴𝑫'


//Las Versiones Y Entre Otros
global.vs = 'V1'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '¿David-OFC?'
global.devnum = '+595 975726335'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
