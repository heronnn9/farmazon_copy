import React from "react";
import Aboutcontainer from "../components/Aboutcontainer";
import { useParams } from "react-router-dom";
import "./App.css";
import "./About.css";
import { Avatar, Breadcrumb } from "antd";
import { useEffect, useState } from "react";

const Collections = () => {
  let { id } = useParams();
  const data = [
    {
      id: 1,
      title: "Farmazon Hakkında",
      logo: "fa fa-book fa-3x",
      makale: "Bu koleksiyonda 7 makale mevcut.",
      yazarlar: "Yazarlar : Melik, Şerife Güner ve Selin Gürel",
      avatars: [
        "https://joeschmoe.io/api/v1/random",
        "https://joeschmoe.io/api/v1/random",
        "https://joeschmoe.io/api/v1/random",
      ],
      collections: [
        {
          id: 11,
          title: "Farmazon Hakkında nedir Nasıl Üye Olabilirim ?",
          tanim: "Farmazon hakkındaki genel bilgileri burdan bulabilirsiniz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
          makale: `<div>
          <b>Test Başlık </b>
          <span style="color:red;">Kırmızı yazı</span>
          </div>`,
        },
        {
          id: 12,
          title: "İletişim",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
          makale: `<div>
          <b>Test Başlık </b>
          <span style="color:red;">Kırmızı yazı</span>
          </div>`,
        },
        {
          id: 13,
          title: "Güvenli Ödeme Sistemi",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
          makale: `<div>
          <b>Test Başlık </b>
          <span style="color:red;">Kırmızı yazı</span>
          </div>`,
        },
        {
          id: 14,
          title: "Farmazon API Dökümanı",
          tanim:
            "Otomatik sipariş aktarımı ve ilan işlemlerinin API kullanarak yapabilirsiniz.",
          yazarlar: "Şerife Güner",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
          makale: `<div>
          <b>Test Başlık </b>
          <span style="color:red;">Kırmızı yazı</span>
          </div>`,
        },
        {
          id: 15,
          title: "Farmazonda Cüzdan Kullanımı Sözleşmesi",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
          makale: `<div>
          <b>Test Başlık </b>
          <span style="color:red;">Kırmızı yazı</span>
          </div>`,
        },
        {
          id: 16,
          title: "Üyelik Sözleşmesi",
          yazarlar: "Melik",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
          makale: `<div>
          <b>Test Başlık </b>
          <span style="color:red;">Kırmızı yazı</span>
          </div>`,
        },
        {
          id: 17,
          title: "Kullanım Koşulları",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
          makale: `<div>
          <b>Test Başlık </b>
          <span style="color:red;">Kırmızı yazı</span>
          </div>`,
        },
      ],
    },
    {
      id: 2,
      title: "Farmazonda Sipariş",
      logo: "fa fa-box fa-3x",
      makale: "Bu koleksiyonda 12 makale mevcut",
      yazarlar: "Yazarlar : Şerife Güner ve Murat Ersoy",
      avatars: [
        "https://joeschmoe.io/api/v1/random",
        "https://joeschmoe.io/api/v1/random",
      ],
      collections: [
        {
          id: 18,
          title: "Farmazon Puan Sistemi Renklendi",
          tanim:
            "Yeni onluk sistemde satıcı puanlarını aldıkları renge göre değerlendirebilir, bu sayede daha isabetli alım tercihleri yapabilirsiniz",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 19,
          title: "Yorum yaınlama kriterleri",
          tanim:
            "Ürün yorumlarınızı yayına almadan önce göz önünde bulundurduğumuz kriterleri bu sayfada bulabilirsiniz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 20,
          title: "Cüzdan nedir? Ne işe yarar?",
          tanim:
            "Para iadeninizi hiçbir banka prosödürüne takılmadan anında hesabınıza aktarıp istediğiniz zaman kullanabilmek için Cüzdan'dan yararlanın. ",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 21,
          title: "Farmazonda Bugün & Yarın Teslim dönemi başladı!",
          tanim:
            "Pazartesi'den Cumartesi'ye 12.00'a kadar verdiğiniz siparişler aynı gün 12.00'dan sonra verdikleriniz ertesi gün eczanenize geliyor.",
          yazarlar: "Murat Ersoy",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 22,
          title: "Kargo Maaliyetinizi %60 a kadar düşürebilirsiniz.",
          tanim:
            "Aşağıdaki dört tavsiyeye uyarak Farmazon siparişlerinizin kargo maliyetini büyük ölçüde düşürmeniz mümkün!",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 23,
          title: "Outler Kategorisi Yayında!",
          tanim:
            "Outlet kategorisiyle ilgili merak ettiklerinizi 5 maddede özetledik.",
          yazarlar: "Murat Ersoy",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 24,
          title: "İade ve iptal Koşulları",
          tanim:
            "Farmazon üzerinden verilen siparişler için iade ve iptal koşulları ile ilgili detaylı bilgiyi burada bulabilirsiniz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 25,
          title: "Farmazon Fatura Entegrasyonları",
          tanim:
            "Artık Farmazon faturalarınızı botanik,Farmassist ve İlon eczane otomasyon programlarıyla otomatik olarak aktarabilirsiniz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 26,
          title: "Farmazonda Nasıl Sipariş Veririm ?",
          tanim:
            "Farmazonda karlı alışveriş ipuçlarını alıcı kurallarını ve işlem rehberini burada bulabilirsiniz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 28,
          title: "Sipariş Sonrası Destek",
          tanim:
            "Sipraişiniz Sırasında ya da sonrasında yaşanabilecek problemlerle ilgili detaylı bilgileri burada bulabilirsiniz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 29,
          title: "E-fatura Hakkında Merak Ettiğiniz Her Şey",
          tanim:
            "E-fatura hakkında aklınıza takılabilecek soruların cevaplarını tek sayfada topladık!",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 30,
          title: "Açık/Kapalı Faturalar Hakkında",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
      ],
    },
    {
      id: 3,
      title: "Farmazonda Satış",
      logo: "fa fa-money fa-3x",
      makale: " Bu koleksiyonda 1 makale mevcut",
      avatars: [
        "https://joeschmoe.io/api/v1/random",
        "https://joeschmoe.io/api/v1/random",
        "https://joeschmoe.io/api/v1/random",
      ],
      yazarlar: "Yazarlar : Erman Çelik , Sarper Dilek ve Selin Gürel",
      collections: [
        {
          id: 31,
          title: "Farmazonda etkili satış yapmanın 10 kuralı",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 32,
          title: "Farmazon Ürün Görsel Rehberi",
          tanim:
            "Farmazon'a ürün görseli göndermeden önce uymanız gereken koşulları bu sayfada bulabilirsiniz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 33,
          title: "Haksız Fiyatlandırmalara Dair Önemli Duyuru",
          tanim:
            "Belli ürün gruplarındaki haksız fiyatlandırmayla ilgili açıklamamıza dikkatinizi çekeriz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 34,
          title: "Farmazondan ÜTS bildirimi",
          tanim:
            "Farmazondan ÜTS bildirimi vermek çok kolay! ÜTS bildirimlerini neden, nasıl ve nerden yapacağınızı bu sayfadan öğrenebilirsiniz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 35,
          title: "Farmazonda Sıvı Ürün Teminatı",
          tanim:
            "Farmazon Sıvı Ürün Teminatının şartlarını ve ilgili örnekleri bu dökümanda bulabilirsinz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 36,
          title: "İlan İşlemleri",
          tanim:
            "İlanlarınızı doğru yönetebilmek için ipuçlarını burada bulabilirsiniz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 37,
          title: "Farmazonda Nasıl Satış Yapabilirim?",
          tanim:
            "Ek gelir elde etmek ve karlılığınız arttırmak için ipuçlarını ve satıcı kurallarını burada bulabilirsiniz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 38,
          title: "Satışı Yasaklı Ürünler",
          tanim:
            "Farmazonda Satışı Yasaklı ürünlerle ilgili gerekli açıklamayı burada bulabilirsiniz.",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 39,
          title: "Farmazon Puan Hesabı",
          tanim:
            "Satıcı puanlarının nasıl hesaplandığını bu belgede bulabilirsiniz",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
        {
          id: 40,
          title: "Banner Kriterleri",
          yazarlar: "Selin Gürel",
          avatars: ["https://joeschmoe.io/api/v1/random"],
          tarih: "Bir haftadan daha uzun süre önce güncellendi",
        },
      ],
    },
  ];
  const [myObject, setMyObject] = useState([]);
  useEffect(() => {
    let obj = data.find((x) => x.id == id);
    setMyObject(obj);
  }, []);

  return (
    <div>
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
              href="#"
              type="submit"
              className="submit2 fa fa-search fa-2x"
            ></a>
          </div>
        </div>
      </div>

      <div className="General">
        <Breadcrumb className="Collections">
          <Breadcrumb.Item href="http://localhost:3000/"></Breadcrumb.Item>
          <Breadcrumb.Item href="http://localhost:3000/">
            <span>Tüm Koleksiyonlar</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{myObject.title}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="CompoCollections">
          <div className="AboutHeader">
            <div className={`book ${myObject.logo} `}></div>
            <div className="Yogo">
              <div className="FarmazonYazi">{myObject.title}</div>
              <div className="MakaleYogo">
                {myObject.avatars &&
                  myObject.avatars.map((avatar) => (
                    <Avatar.Group className="avatars-about">
                      <Avatar style={{ background: "bisque" }} src={avatar} />
                    </Avatar.Group>
                  ))}
                <span className="Yazi1">{myObject.makale}</span>
                <br />
                <span className="Yazi2">{myObject.yazarlar}</span>
              </div>
            </div>
          </div>
          {myObject.collections &&
            myObject.collections.map((expenseData, index) => {
              if (index === 3) {
                return (
                  <div>
                    <p>Kurumsal Belgeler</p>
                    <Aboutcontainer data={expenseData} />
                  </div>
                );
              }
              return <Aboutcontainer data={expenseData} />;
            })}
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
export default Collections;
