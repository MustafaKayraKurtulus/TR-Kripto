Selams ? 👋

Paylaştığım bu script tıpkı bir npm modülü gibidir herhangi bir yerde veya discord botunuzun dosyasında kullanabilirsiniz..
scriptin amacı kripto para dönüştürücüsüdür.

Herhangi bir sorun olursa veya hata alırsanız =>
Discord: Vitraxdev ⌔#0666 bana ulaşabilirsiniz..

Kurulum:

dosyaları indirip "npm init"i kuruyoruz daha sonrasında npm i superagent yazarak import ettiğim modülü yüklüyoruz ve daha sonrasında bu dosyayı Discord Botu veya Nerede kullanacaksak kullanabiliriz..


    unit = args[0]
    if (!unit) return message.channel.send("Lütfen bir crypto para belirtiniz. \`!kripto <bitcoin>\`")
    message.channel.send(new Discord.MessageEmbed().setDescription('Bilgiler getiriliyor. Lütfen bekleyiniz..')).then(async m => {
        let all = await crypto.all(unit)
        const embed = await new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setThumbnail(all.icon)
            .setAuthor(all.name)
            .addField('Fiyat (TRY)', `\`${all.try}\``)
            .addField('Fiyat (USD)', `\`${all.usd}\``)
            .addField('24 Saatlik Hacim', `\`${all.vol24}\``)
            .addField('Aktif Hacim', `\`${all.market}\``)
            .addField('1 yılın en düşük değeri', `\`${all.lower}\``)
            .addField('1 yılın en yüksek değeri', `\`${all.higher}\``)
            .addField('Anlık Yüzdelik Değeri', `\`${all.percent}\``)
            .setImage(all.table)
            .setFooter('Developed By. Kayra - For GitHub')
        await m.edit(embed);
    });
    
    şeklinde kullanabilirsiniz..
    
    İyi Kullanımlar!
