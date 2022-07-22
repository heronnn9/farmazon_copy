import React from "react";
import { Avatar, Breadcrumb } from "antd";
import { useParams } from "react-router-dom";
import "./Articlee.css";
import { useEffect, useState } from "react";
const turkishtoEnglishForReact = (value) => {
  let newWord = value
    .replaceAll("Ğ", "g")
    .replaceAll("Ü", "u")
    .replaceAll("Ş", "s")
    .replaceAll("I", "i")
    .replaceAll("İ", "i")
    .replaceAll("Ö", "o")
    .replaceAll("Ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replaceAll(" ", "-");

  console.log(newWord);
  return newWord;
};
const Articles = () => {
  const [input, setInput] = useState("");

  return (
    <div className="boddy">
      <div className="Header">
        <div className="headercontainer">
          <div className="farmazonyaziii">
            <span>
              <a href="#" className="farmazonyazi ">
                <i className="fa fa-arrow-up-right-from-square" /> Farmazon
                uygulamasına gidin
              </a>
            </span>
          </div>
          <a href="#" className="linkFarmazon"></a>
          <div className="input">
            <input
              type="text"
              className="inputText"
              placeholder="Yanıt ara..."
            />
            <a
              href="http://localhost:3000/"
              type="submit"
              className="submit-article fa fa-search fa-2x"
            ></a>
          </div>
        </div>
      </div>
      <div className="">
        <Breadcrumb className="BreadCrumbs">
          <Breadcrumb.Item href="http://localhost:3000/">
            <span>Tüm Koleksiyonlar</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="http://localhost:3000/collections/1"></Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="http://localhost:3000/collections/1">Farmazon Hakkında</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Farmazon Nedir ?</Breadcrumb.Item>
        </Breadcrumb>
        <div className="General-article">
          <input
            value={input}
            onChange={(a) => setInput(turkishtoEnglishForReact(a.target.value))}
          />
          <span>{input}</span>
          <div className="article">
            <div className="Farmazon-article">
              Farmazon Nedir Nasıl Üye olabilirim
            </div>
            <br />
            <div className="Farmazon2-article">
              Farmazon hakkında genel bilgileri burada bulabilirsiniz.
            </div>
            <br />
            <div className="YazarAvatarUpdate">
              <Avatar></Avatar>
              <div className="YazarUpdate">
                <div className="Yazar-article">Yazarlar : Selin Gürel</div>
                <div className="Update-time">
                  bir haftadan daha uzun süre önce güncellendi
                </div>
              </div>
            </div>
            <br />
            <div className="Makalesi">
              Farmazon nedir? Farmazon serbest eczacılara özel bir alışveriş
              platformudur. Kimler Farmazon'un imkanlarından kimler
              faydalanabilir? Farmazon'un avantajlarından yalnızca eczacılar
              faydalanabilir. Bu sebeple GLN numarası ve kullanıcı adı ile üye
              olunmaktadır. Üyelik sonrası satın alma ya da satış işlemleri
              hemen başlayabilir, ekstra bir ücret yoktur. Nasıl üye olabilirim?
              Farmazon.com.tr 'yi açtığınızda sağ üst tarafta yer alan Üye Ol
              butonuna tıklayarak üyelik sayfasını açın. Açılan sayfada GLN
              numaranızı, Farmazon'da kullanmak istediğiniz kullanıcı adınızı ve
              belirleyeceğiniz şifreyi yazıp Üye Ol butonuna tıklayın. ITS’ye
              kayıtlı olan e-posta adresinize üyelik doğrulama link'i
              yollanacaktır. Gönderdiğimiz doğrulama link'ine tıklayarak
              üyeliğinizi aktif hale getirebilir ve Farmazon'u kullanmaya
              başlayabilirsiniz. ITS'de kayıtlı e-posta adresim değişti, ne
              yapmalıyım? E-posta adresinizi güncellemek için canlı destek
              bölümünden bize ulaşabilirsiniz. Aktivasyon e-postası gelmedi, ne
              yapmalıyım? E-postalar bazen Gereksiz E-posta (veya Spam)
              klasörlerine de düşebiliyor. Aktivasyon e-postası bu klasörlerde
              de değilse canlı destek bölümünden bize ulaşabilirsiniz.
              Farmazon'dan alışveriş yapmak yasal mıdır? Evet! İlaç dışı
              ürünlerde karekod uygulaması olmadığı için eczacıların yaptığı
              alımlarda herhangi bir sınırlama bulunmamaktadır. Ayrıca her
              siparişte fatura kesilmesi zorunludur. Hangi ürünlerin satışı
              yapılabilir? Hangilerinin satışı yasaktır? Eczanelerde satılan tüm
              ilaç dışı ürünlerin satışı serbest olmakla birlikte, reçete ile
              satılan her tür ilacın satışı yasaktır. Doktor reçetesi ile
              alınabilen numaralı gözlük ile reçeteli veya reçetesiz ilaç
              yapımında kullanılan maddelerin satışı yasaktır. Ayrıca evcil
              hayvanlara reçete ile verilen ilaçların da satışı da yasak
              kapsamındadır. Yasaklı bir ürünün satışı halinde ilan derhal
              silinecek ve ilan sahibi uyarılacaktır. İhlalin tekrarı halinde
              Farmazon ilan sahibinin üyeliğini sonlandırma hakkını saklı tutar.
              Yasaklı bir ürünün satışı halinde ilan derhal silinecek ve ilan
              sahibi uyarılacaktır. Yasaklı ürünün satışından doğabilecek hukuki
              sorunlarda Farmazon sorumluluk almaz. Farmazon'da alışveriş yapmak
              güvenli midir? Kesinlikle. Tüm ödemeleriniz Farmazon ödeme
              sisteminin %100 güvencesi altında gerçekleşir. Farmazon Güvenli
              Ödeme Sistemi ile ilgili detaylı bilgiye ilgili sayfadan
              ulaşabilirsiniz. Farmazon'un kurucuları kimlerdir? Farmazon’un
              temelleri 2014 yılının Eylül ayında Danyal ve Melik tarafından
              atıldı. Farklı şehirlerde bulunan yaklaşık yüz eczacı ile yapılan
              detaylı görüşmeler sonrasında yaşanılan problemler ve olası
              çözümler incelendi. Bu detaylı araştırma sonrasında piyasada
              özellikle ilaç dışı ürünlerde büyük fiyat farklılıklarının
              bulunduğunu ve uygun fiyatlı ürün bulmanın eczacılar için ne kadar
              önemli ve zahmetli bir iş olduğunu gözlemlediler. Sonrasında ise
              güçlü bir ekip kurarak fikirlerini hayata geçirdiler. Farmazon
              ekibi hala her geçen gün büyüyor ve yeni fikirleri hayata geçirmek
              için çok çalışıyor!
            </div>
          </div>
          <div className="Emojis">
            <button id="1" className="Emoji1">
              😋
            </button>

            <button className="Emoji2">😋</button>
            <button className="Emoji3">😋</button>
          </div>
        </div>
      </div>

      <div className="bottomcontainer">
        <div className="bottom">
          <a href="#" className="bottomfarmazonlink"></a>
          <div className="facetwitter">
            <a href="#" className="twitter fa fa-twitter"></a>
            <a href="#" className="facebook fa fa-facebook"></a>
            <a href="#" className="linkedin fa fa-linkedin fa-1x"></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Articles;
