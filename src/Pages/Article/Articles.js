import React from "react";
import { Avatar, Breadcrumb } from "antd";
import { useParams } from "react-router-dom";
import "./Articlee.css";
import { useEffect, useState } from "react";

const Articles = () => {
  let { id } = useParams();
  const data = [
    {
      id: 11,
      title: "Farmazon Hakkında nedir Nasıl Üye Olabilirim ?",
      tanim: "Farmazon hakkındaki genel bilgileri burdan bulabilirsiniz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `<b>Farmazon nedir?</b>
      <br>
Farmazon serbest eczacılara özel bir alışveriş platformudur.

Kimler Farmazon'un imkanlarından kimler faydalanabilir?
Farmazon'un avantajlarından yalnızca eczacılar faydalanabilir. Bu sebeple GLN numarası ve kullanıcı adı ile üye olunmaktadır. Üyelik sonrası satın alma ya da satış işlemleri hemen başlayabilir, ekstra bir ücret yoktur. 

Nasıl üye olabilirim?
Farmazon.com.tr 'yi açtığınızda sağ üst tarafta yer alan Üye Ol butonuna tıklayarak üyelik sayfasını açın. Açılan sayfada GLN numaranızı, Farmazon'da kullanmak istediğiniz kullanıcı adınızı ve belirleyeceğiniz şifreyi yazıp Üye Ol butonuna tıklayın.

ITS’ye kayıtlı olan e-posta adresinize üyelik doğrulama link'i yollanacaktır. Gönderdiğimiz doğrulama link'ine tıklayarak üyeliğinizi aktif hale getirebilir ve Farmazon'u kullanmaya başlayabilirsiniz.

ITS'de kayıtlı e-posta adresim değişti, ne yapmalıyım?
E-posta adresinizi güncellemek için canlı destek bölümünden bize ulaşabilirsiniz.

Aktivasyon e-postası gelmedi, ne yapmalıyım?
E-postalar bazen Gereksiz E-posta (veya Spam) klasörlerine de düşebiliyor. Aktivasyon e-postası bu klasörlerde de değilse canlı destek bölümünden bize ulaşabilirsiniz.

Farmazon'dan alışveriş yapmak yasal mıdır?
Evet! İlaç dışı ürünlerde karekod uygulaması olmadığı için eczacıların yaptığı alımlarda herhangi bir sınırlama bulunmamaktadır. Ayrıca her siparişte fatura kesilmesi zorunludur.

Hangi ürünlerin satışı yapılabilir? Hangilerinin satışı yasaktır?
Eczanelerde satılan tüm ilaç dışı ürünlerin satışı serbest olmakla birlikte, reçete ile satılan her tür ilacın satışı yasaktır.  Doktor reçetesi ile alınabilen numaralı gözlük ile reçeteli veya reçetesiz ilaç yapımında kullanılan maddelerin satışı yasaktır. Ayrıca evcil hayvanlara reçete ile verilen ilaçların da satışı da yasak kapsamındadır. Yasaklı bir ürünün satışı halinde ilan derhal silinecek ve ilan sahibi uyarılacaktır.  İhlalin tekrarı halinde Farmazon ilan sahibinin üyeliğini sonlandırma hakkını saklı tutar. Yasaklı bir ürünün satışı halinde ilan derhal silinecek ve ilan sahibi uyarılacaktır. Yasaklı ürünün satışından doğabilecek hukuki sorunlarda Farmazon sorumluluk almaz.

Farmazon'da alışveriş yapmak güvenli midir?
Kesinlikle. Tüm ödemeleriniz Farmazon ödeme sisteminin %100 güvencesi altında gerçekleşir. Farmazon Güvenli Ödeme Sistemi ile ilgili detaylı bilgiye ilgili sayfadan ulaşabilirsiniz.

Farmazon'un kurucuları kimlerdir?
Farmazon’un temelleri 2014 yılının Eylül ayında Danyal ve Melik tarafından atıldı. Farklı şehirlerde bulunan yaklaşık yüz eczacı ile yapılan detaylı görüşmeler sonrasında yaşanılan problemler ve olası çözümler incelendi. Bu detaylı araştırma sonrasında piyasada özellikle ilaç dışı ürünlerde büyük fiyat farklılıklarının bulunduğunu ve uygun fiyatlı ürün bulmanın eczacılar için ne kadar önemli ve zahmetli bir iş olduğunu gözlemlediler. Sonrasında ise güçlü bir ekip kurarak fikirlerini hayata geçirdiler. Farmazon ekibi hala her geçen gün büyüyor ve yeni fikirleri hayata geçirmek için çok çalışıyor!`,
    },
    {
      id: 12,
      title: "İletişim",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Şirket Unvanı: Mesa Verde Vitamin Kozmetik ve Gıda Takviyeleri Ticaret A.Ş.

Vergi Dairesi: Beşiktaş
Vergi Kimlik No: 6190574104
Ticaret Sicil No: 40297-5
Mersis No: 0619 0574 1040 0018
Mensubu olduğu sektörel kuruluş: İstanbul Ticaret Odası
Kayıtlı e-posta adresi (KEP) : mesaverde@hs01.kep.tr

E-Posta: merhaba@farmazon.com.tr

Çalışma Saatleri: Pazartesi-Cumartesi 09.00-19.00
Telefon: 0850 840 18 90 
Adres: Levent Mahallesi Şakayıklı Sokak No:9 34330 Beşiktaş - İstanbul`,
    },
    {
      id: 13,
      title: "Güvenli Ödeme Sistemi",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `"Farmazon Güvenli Ödeme Sistemi" nedir?
Elektronik ortamdan alışverişi daha güvenli kılan bir ödeme-onay sistemidir. Ödeme tutarı, satıcıya, alıcının ürünleri teslim alması ve buna ilişkin onayını müteakip aktarılır. Böylece risk almadan alışveriş yapmış olursunuz. Farmazon’daki bütün ödemeler Farmazon Güvenli Ödeme Sistemi güvencesi ile gerçekleşir.

"Farmazon Güvenli Ödeme Sistemi"nin faydası nedir?
Satıcıysanız; alıcı ürünleri güvenli bir şekilde teslim aldığını belirttiği takdirde, ödeme tutarı hesabınıza ödeme yapılan günü takiben tam bir hafta sonra aktarılır. Örn: Alıcı, ürünleri güvenli bir şekilde teslim aldığını belirttiyse ve Pazartesi günü ödeme yaptıysa ödeme tutarı satıcıya bir sonraki Pazartesi günü aktarılır.

Olası bir gecikme sebebiyle alıcı kargoyu bir haftadan uzun bir sürede teslim aldığını belirtirse, ödeme tutarı satıcıya bu onaydan bir gün sonra aktarılır. Örneğin alıcı Pazartesi günü ödeme yapıp bir sonraki Salı günü ürünleri teslim aldığını belirttiyse, ödeme bir gün sonra Çarşamba günü satıcıya aktarılır. Bu şekilde ürününüz ve paranız Farmazon güvencesi altında olur.

Alıcıysanız; ödemeniz satıcıya hemen aktarılmaz, sipariş tarihinden sonraki 5. iş günü satıcının hesabına aktarılır. 

Paranız ne kadar güvende?
Farmazon’da paranız güvendedir. Siz elinize ulaşan ürünlere onay vermeden paranız satıcıya aktarılmaz. Sorunlu bir ürün geldiğinde paranız iade edilir.

Farmazon'da kredi kartıyla ödeme yapmak güvenli midir?
Kesinlikle. Tüm ödemeleriniz Farmazon ödeme sisteminin %100 güvencesi altında gerçekleşir. 

Havuz hesabı nedir?
Havuz hesabı, Farmazon’da yaptığınız tüm ödemelerin ilk önce aktarıldığı hesaptır. Bir ürüne ödeme yaptığınızda paranız önce Farmazon’un yönettiği güvenli havuz hesabına aktarılır. Sipariş tarihinden sonraki 5. iş gününde, sizden bir sorun bildirimi gelmediği takdirde, havuz hesabında tutulan paranız Farmazon tarafından satıcının hesabına aktarılır. Üründe sorun çıkarsa havuz hesabında bekletilen paranız satıcıya aktarılmaz; kredi kartınıza iade edilir. Böylece paranız %100 güvence altında olur.

`,
    },
    {
      id: 14,
      title: "Farmazon API Dökümanı",
      tanim:
        "Otomatik sipariş aktarımı ve ilan işlemlerinin API kullanarak yapabilirsiniz.",
      yazarlar: "Şerife Güner",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `"Farmazon Güvenli Ödeme Sistemi" nedir?
Elektronik ortamdan alışverişi daha güvenli kılan bir ödeme-onay sistemidir. Ödeme tutarı, satıcıya, alıcının ürünleri teslim alması ve buna ilişkin onayını müteakip aktarılır. Böylece risk almadan alışveriş yapmış olursunuz. Farmazon’daki bütün ödemeler Farmazon Güvenli Ödeme Sistemi güvencesi ile gerçekleşir.

"Farmazon Güvenli Ödeme Sistemi"nin faydası nedir?
Satıcıysanız; alıcı ürünleri güvenli bir şekilde teslim aldığını belirttiği takdirde, ödeme tutarı hesabınıza ödeme yapılan günü takiben tam bir hafta sonra aktarılır. Örn: Alıcı, ürünleri güvenli bir şekilde teslim aldığını belirttiyse ve Pazartesi günü ödeme yaptıysa ödeme tutarı satıcıya bir sonraki Pazartesi günü aktarılır.

Olası bir gecikme sebebiyle alıcı kargoyu bir haftadan uzun bir sürede teslim aldığını belirtirse, ödeme tutarı satıcıya bu onaydan bir gün sonra aktarılır. Örneğin alıcı Pazartesi günü ödeme yapıp bir sonraki Salı günü ürünleri teslim aldığını belirttiyse, ödeme bir gün sonra Çarşamba günü satıcıya aktarılır. Bu şekilde ürününüz ve paranız Farmazon güvencesi altında olur.

Alıcıysanız; ödemeniz satıcıya hemen aktarılmaz, sipariş tarihinden sonraki 5. iş günü satıcının hesabına aktarılır. 

Paranız ne kadar güvende?
Farmazon’da paranız güvendedir. Siz elinize ulaşan ürünlere onay vermeden paranız satıcıya aktarılmaz. Sorunlu bir ürün geldiğinde paranız iade edilir.

Farmazon'da kredi kartıyla ödeme yapmak güvenli midir?
Kesinlikle. Tüm ödemeleriniz Farmazon ödeme sisteminin %100 güvencesi altında gerçekleşir. 

Havuz hesabı nedir?
Havuz hesabı, Farmazon’da yaptığınız tüm ödemelerin ilk önce aktarıldığı hesaptır. Bir ürüne ödeme yaptığınızda paranız önce Farmazon’un yönettiği güvenli havuz hesabına aktarılır. Sipariş tarihinden sonraki 5. iş gününde, sizden bir sorun bildirimi gelmediği takdirde, havuz hesabında tutulan paranız Farmazon tarafından satıcının hesabına aktarılır. Üründe sorun çıkarsa havuz hesabında bekletilen paranız satıcıya aktarılmaz; kredi kartınıza iade edilir. Böylece paranız %100 güvence altında olur.

`,
    },
    {
      id: 15,
      title: "Farmazonda Cüzdan Kullanımı Sözleşmesi",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `İşbu Farmazon Cüzdan Kullanım Sözleşmesi (“Sözleşme”) Levent Mahallesi, Şakayıklı Sokak No:9 Beşiktaş/İstanbul adresinde mukim Mesa Verde Vitamin Kozmetik ve Gıda Takviyeleri Ticaret Anonim Şirketi (“Farmazon”) ile elektronik ortamda işbu Sözleşme’yi onaylayarak, www.farmazon.com.tr alan adlı web sitesi/mobil internet sitesi ve/veya Farmazon mobil uygulaması (hepsi birlikte “Site”) üzerindeki Farmazon Cüzdan Sistemi’ne (“Cüzdan Sistemi”) kayıt olan gerçek kişi tacir veya tüzel kişi (“Cüzdan Kullanıcısı” veya “Kullanıcı”) arasında akdedilmiştir.

1. Site üzerindeki Farmazon Üyelik Sözleşmesi’ni (“Üyelik Sözleşmesi”) kabul etmek suretiyle Site üzerinde üyelik hesabı oluşturan gerçek kişi tacir veya tüzel kişi Site üyeleri, Farmazon’dan bağımsız üçüncü kişi satıcılardan Üyelik Sözleşmesi hükümleri doğrultusunda çeşitli ürünler satın alabilmekte veya satabilmektedirler.

Farmazon, sadece aracı hizmet sağlayıcı/yer sağlayıcı olarak faaliyet göstermekte olup, Site üzerinde herhangi bir ürün satmamaktadır. Farmazon’un Site üzerindeki üçüncü kişi satıcılar tarafından satışa çıkarılan ürünler ile ilgili hukuki/cezai herhangi bir sorumluluğu bulunmamaktadır. Farmazon, sadece ürün satın alan Site üyesinin ödediği bedelin satıcıya güvenli bir şekilde aktarılmasını sağlamaktadır. 

 

İşbu Sözleşme’nin tarafı olan Site üyesi Cüzdan Kullanıcısı ise; Üyelik Sözleşmesi’ne ek olarak, işbu Sözleşme’yi de elektronik ortamda kabul ederek, Site üzerindeki Cüzdan Sistemi’ne kayıt olmaktadır.

2. Kullanıcı adına Site üzerindeki Cüzdan Sistemi kapsamında bir cüzdan hesabı (“Cüzdan Hesabı”) oluşturulacaktır. Kullanıcı, işbu Sözleşme hükümleri doğrultusunda, Cüzdan Hesabı’nı kullanabilecektir.

3. Kullanıcı’nın Site üzerinden ödemesini gerçekleştirmiş olduğu ürün siparişlerine ilişkin iptal/iade durumları sebebiyle, Farmazon tarafından ilgili satıcıya aktarılmayarak Kullanıcı’ya iade edilecek olan bedeller veya paranın satıcıya aktarıldığı ve satıcının söz konusu iptal/iade sebebi ile iade ettiği bedeller, Kullanıcı’nın Site üzerinden ileteceği talebine istinaden Kullanıcı’ya iade edilmeyerek, Cüzdan Hesabı’na TL para birimi üzerinden bakiye olarak aktarılacaktır.

Kullanıcı; talebi üzerine Cüzdan Hesabı’na aktarılan bedellerin Farmazon tarafından kendisine ödenen ek bir promosyon/hediye bedeli olmadığı, anılan bedellerin iptal/iade edilen siparişler sebebiyle hak kazanmış olduğu bedeller olduğu ve Cüzdan Hesabı’na aktarılmasını talep ettiği bedellere ilişkin olarak kendisine tekrar herhangi bir ödeme yapılmayacağı hususlarını bildiğini, bu bedellere ilişkin olarak Farmazon ve/veya ilgili satıcıdan herhangi bir talepte bulunmayacağını kabul, beyan ve taahhüt eder.

 

4. Farmazon, dilediği takdirde Kullanıcı’ya, kredi kartları ve debit kartları aracılığıyla Cüzdan Hesabı’na bakiye aktarma seçeneği de sunabilecektir. Bu durumda Kullanıcı, Cüzdan Hesabı’na Farmazon tarafından belirlenen ve Site üzerinde ilan edilen alt ve üst limitler doğrultusunda TL para birimi üzerinde bakiye aktarabilecektir. 

Cüzdan Hesabı’na bakiye yüklemelerinde yalnızca Türkiye Cumhuriyeti’nde kurulu olan bankalara ait kredi kartları/debit kartları kullanılabilecektir.

Farmazon, Cüzdan Hesabı’na kredi kartları ve debit kartları aracılığıyla bakiye aktarma seçeneğini dilediği zaman tek taraflı olarak sonlandırabilir. Bu durumda Farmazon tarafından Kullanıcı’ya, sadece işbu Sözleşme’nin 3 ve 5 (Farmazon tarafından bu seçeneğin sunulması halinde) numaralı maddeleri uyarınca Cüzdan Hesabı’na bakiye yükleme seçeneği sunulabilecektir.

5. Farmazon, dilediği takdirde Kullanıcı’ya, Site üzerinden yaptığı satışlar sebebiyle hak kazandığı bedelleri, Cüzdan Hesabı’na TL para birimi üzerinden bakiye olarak aktarma seçeneği de sunabilir. 

Bu seçeneğin sunulması halinde; Kullanıcı’nın Site üzerinde yaptığı bir satış sebebiyle hak kazandığı bedel, Kullanıcı’nın Site üzerinden ileteceği talebine istinaden, Farmazon tarafından Kullanıcı’ya ödenmeyerek, Cüzdan Hesabı’na TL para birimi üzerinden bakiye olarak aktarılacaktır.

Kullanıcı, bir ürün satışı sebebiyle hak kazandığı bedelin Cüzdan Hesabı’na aktarılması halinde, Farmazon tarafından bu satıştan hak kazandığı bedele ilişkin olarak kendisine tekrar herhangi bir ödeme yapılmayacağını bildiğini, bu bedellere ilişkin olarak Farmazon ve/veya ürünü satın alan Kullanıcı’dan herhangi bir talepte bulunmayacağını kabul, beyan ve taahhüt eder.

Farmazon, Cüzdan Hesabı’na işbu madde uyarınca bakiye aktarma seçeneğini dilediği zaman tek taraflı olarak sonlandırabilir. Bu durumda Farmazon tarafından Kullanıcı’ya, sadece Sözleşme’nin 3 ve 4 (Farmazon tarafından bu seçeneğin sunulması halinde) numaralı maddeleri uyarınca Cüzdan Hesabı’na bakiye yükleme seçeneği sunulabilecektir.

6. Kullanıcı; talebi üzerine Cüzdan Hesabı’na bakiye olarak aktarılan ve/veya doğrudan kendisi aktardığı bedelleri gelecekte Site üzerinde gerçekleştireceği ödemelerde kullanabilir. 

Kullanıcı, Site üzerinden herhangi bir ürün için sipariş verip ödeme aşamasına geldiğinde ödeme seçenekleri arasında yer alan “Cüzdan” seçeneğini tercih ettiği takdirde, ilgili bedel Farmazon tarafından Kullanıcı’nın Cüzdan Hesabı’ndaki bakiyeden tahsil edilerek, söz konusu ürünü satan üçüncü kişi satıcıya aktarılacaktır.

Kullanıcı; siparişine konu bedelin bir kısmını Cüzdan Hesabı’ndaki bakiyesi ile, bir kısmını ise diğer ödeme seçenekleri ile ödeyebilir. 

Cüzdan Hesabı’ndaki bakiye sadece Site üzerinde kullanılabilecek olup, Site haricinde gerçekleştirilecek herhangi bir ödeme için kullanılamaz. 

7. Kullanıcı; Cüzdan Hesabı’nı sadece Site üzerinden yönetebilecek ve görüntüleyebilecektir. Site’ye giriş yapmadan Cüzdan Hesabı’na erişebilmesi ve/veya Cüzdan Hesabı’nı yönetebilmesi mümkün değildir. 

8. Kullanıcı’nın Cüzdan ödeme yöntemini seçerek gerçekleştirdiği bir siparişin herhangi bir sebeple iptale/iadeye konu olması halinde, Cüzdan ödeme yöntemi kullanılarak ödenen bedeller yine Cüzdan Hesabı’na bakiye olarak iade edilecektir. Kullanıcı, siparişe konu ödemenin bir kısmını kredi kartıyla, bir kısmını Cüzdan Hesabı’ndaki bakiye ile gerçekleştirdiyse, kredi kartı ile ödenen kısım dilerse Cüzdan Hesabı’na ya da kredi kartına, Cüzdan ödeme yöntemiyle ödenen kısım ise Cüzdan Hesabı’na bakiye olarak iade edilecektir.

9. Kullanıcı’nın talebiyle Cüzdan Hesabı’na aktarım yapıldığında, bu aktarıma ilişkin olarak herhangi bir fiş/fatura düzenlenmeyecektir. Bununla birlikte, Kullanıcı Cüzdan Hesabı’ndaki bakiyeyi kullanarak Site üzerindeki bir siparişine ilişkin ödeme yaptığında, siparişe ilişkin olarak ilgili üçüncü kişi satıcı tarafından fatura düzenlenecektir.

10. Farmazon, Sözleşme’nin 3, 4 veya 5 numaralı maddeleri uyarınca Cüzdan Hesabı’na aktarılabilecek bedele ilişkin alt ve üst limitleri belirmeye münhasıran yetkilidir. Farmazon, söz konusu limitleri dilediği takdirde tek taraflı olarak değiştirebilir. Güncellenen alt ve üst limit bilgileri, Farmazon tarafından Site üzerinde ilan edilecektir.

11. Kullanıcı; Cüzdan Sistemi kapsamında gerçekleştirdiği işlemlerde, işbu Sözleşme’de ve Üyelik Sözleşmesi’nde yer alan bütün hükümlere, yürürlükteki bütün mevzuata ve Site üzerinde yer alan Cüzdan Sistemi ile ilgili bütün koşullara ve açıklamalara uygun hareket edeceğini kabul, beyan ve taahhüt eder. 

Kullanıcı; Site’yi/Cüzdan Sistemi’ni sadece hukuka uygun bir şekilde kullanacağını, izinsiz bir erişim gerçekleştirmeyeceğini, Site’ye/Cüzdan Sistemi’ne zararlı herhangi bir yazılım yüklemeyeceğini ve bunlarla sınırlı olmaksızın Farmazon, Site ve Cüzdan Sistemi’ni zarara uğratabilecek bütün davranışlardan kaçınacağını kabul, beyan ve taahhüt eder.

Kullanıcı’nın Site ve Cüzdan Sistemi dahilinde yaptığı bütün işlem ve eylemlerdeki hukuki ve cezai sorumluluk kendisine aittir. 

12. Taraflar, Üyelik Sözleşmesi kapsamındaki bütün hak ve yükümlülüklerinin saklı olduğunu ve Üyelik Sözleşmesi’nin bütün hükümlerinin işbu Sözleşme ve Cüzdan Sistemi açısından da uygulanacağını bildiklerini kabul, beyan ve taahhüt ederler.

13. Farmazon tarafından öngörülemeyen ve/veya engellenemeyen ve/veya Farmazon’un herhangi bir kusuru olmayan durumlar neticesinde Cüzdan Hesabı’yla ödeme yapılamaması veya geç ödeme yapılması veya ödemeye ilişkin herhangi hata olması ya da cüzdan üzerinden ödenen siparişin herhangi bir sebeple iptal edilmesi durumlarında, Kullanıcı Farmazon’dan herhangi bir talepte bulunamaz ve Farmazon’u herhangi bir şekilde sorumlu tutamaz.

14. Kullanıcı’nın, Site’ye/Cüzdan Sistemi’ne kötü niyetli üçüncü kişiler tarafından yüklenebilecek zararlı yazılımlar sebebiyle, Farmazon tarafından alınan güvenlik önlemlerine rağmen doğacak zararı karşısında Farmazon sorumlu değildir.

15. Kullanıcı Cüzdan hesabını üçüncü kişilere kullandıramaz, Cüzdan hesabındaki bakiyeyi üçüncü kişilere devredemez. Aksi halde Kullanıcı’nın ve/veya üçüncü kişilerin uğrayacağı zararlara ilişkin olarak Farmazon’un herhangi bir sorumluluğu bulunmayacaktır.

16. Kullanıcı’nın Site’ye, Cüzdan Sistemi’ne ve Cüzdan Hesabı’na giriş için kullandığı bütün erişim bilgilerinin güvenliği ve gizliliği tamamen Kullanıcı’nın sorumluluğundadır. Kullanıcı, Site’ye/Cüzdan Hesabı’na giriş bilgilerini başka kişi ya da kuruluşlara veremeyecek ve paylaşamayacaktır. Aksi halde işbu kişinin yaptığı tüm işlemlerden bizzat sorumlu olacaktır.

Kullanıcı, kendisine ait erişim bilgileri ile giriş yapılan bir üyelik hesabına bağlı olan Cüzdan Hesabı ile yapılan işlemlerin sadece kendisi tarafından gerçekleştirildiğini ve bu işlemlerden kaynaklanan sorumluluğun peşinen kendisine ait olduğunu kabul, beyan ve taahhüt etmektedir. Bu şekilde gerçekleştirilen iş ve işlemleri kendisinin gerçekleştirmediği yolunda herhangi bir def'i ve/veya itiraz ileri süremeyeceğini ve/veya bu def'i veya itiraza dayanarak yükümlülüklerini yerine getirmekten kaçınmayacağını ve söz konusu iş ve işlemler sebebiyle Farmazon’un, diğer Site üyelerinin ve/veya üçüncü kişilerin uğradığı tüm zararları tazmin edeceğini kabul, beyan ve taahhüt etmektedir.

Kullanıcı, kendisine ait üyelik hesabına bağlı olan Cüzdan Hesabı’nın yetkisiz kişilerce kullanılmasından dolayı gelebilecek zararlardan ötürü Farmazon’un sorumlu tutulamayacağını; üyelik hesabına ve Cüzdan Hesabı’na giriş için kullanılan tüm bilgilerini korumaktan sorumlu olacağını ve bunları üçüncü kişilerle paylaşmayacağını; bahsi geçen bilgilerin bu gizlilik yükümlülüğüne uygun davranmaması nedeniyle kaybolması, çalınması veya yetkisiz bir şekilde kullanımının söz konusu olması halinde oluşabilecek zararlardan ötürü Farmazon’u sorumlu tutamayacağını ve Farmazon’un herhangi bir yükümlülüğünün doğmayacağını kabul, beyan ve taahhüt etmektedir.

17. Herhangi bir gerçek kişinin Site ve Cüzdan Sistemi üzerinde, tüzel bir kişi veya ticari işletme adına işlem gerçekleştirmesi halinde söz konusu gerçek kişi, ilgili tüzel kişiyi/ticari işletmeyi temsil ve ilzama yetkili olduğunu kabul, beyan ve taahhüt etmektedir. Aksi halde gerçek kişi, doğan borç ve yükümlülüklerden şahsen sorumlu olmayı kabul, beyan ve taahhüt etmektedir.

Tüzel kişi Kullanıcı, kendisini temsil ve ilzama yetkili olan gerçek kişinin Cüzdan Sistemi üzerinde gerçekleştirdiği/gerçekleştireceği tüm işlemlerin doğrudan kendisini bağladığını kabul, beyan ve taahhüt etmektedir. Tüzel kişi Kullanıcı, gerçek kişiye vermiş olduğu temsil ve ilzama ilişkin yetkinin sona ermesi halinde, derhal durumdan Farmazon’u haberdar edeceğini ve üyeliğe/Cüzdan Sistemi’ne ilişkin bilgileri temsil ve ilzama yetkili kıldığı yeni bir kişi ile paylaşarak Site’deki Cüzdan Sistemi’nin işbu yetkili kişi tarafınca kullanılmasını sağlayacağını kabul, beyan ve taahhüt eder. Tüzel kişi Kullanıcı, yetkilisini Farmazon’a geç bildirmesi veya hiç bildirmemesi sebebi ile meydana gelecek tüm zararlardan ve yetkisi sona ermiş veya yetkilendirilmemiş kişinin yaptığı tüm işlemlerden bizzat ve münhasıran sorumlu olacağını kabul, beyan ve taahhüt eder. Tüzel kişi Kullanıcı, böyle bir durumun gerçekleşmesi ve üçüncü kişilerin söz konusu durum sebebi ile Farmazon’a herhangi bir talep yöneltmesi halinde, Farmazon’un bütün zararlarını Sözleşme’nin 20 numaralı maddesi uyarınca kendisine rücu edebileceğini bildiğini kabul, beyan ve taahhüt etmektedir.

18. Farmazon, şüpheli bir Kullanıcı işlemi tespit edildiğinde ve bununla sınırlı olmaksızın kendi tek taraflı takdiriyle herhangi bir zamanda sebep göstermeksizin Kullanıcı’nın Cüzdan seçeneği ile ödeme yapma imkanını geçici bir süreyle askıya alabilir veya Cüzdan Sistemi’ni geçici olarak kapatabilir.

Cüzdan Hesabı’nın kullanımının geçici bir süre askıya alınmasından/Cüzdan Sistemi’nin kapatılmasından dolayı Farmazon’un Kullanıcı’ya karşı hiçbir sorumluluğu olmayacaktır.

19. Farmazon, dilediği zaman, Site’nin ve Cüzdan Sistemi’nin kullanım şeklini ve koşullarını değiştirebilir.

20. Farmazon, dilediği zaman, işbu Sözleşme’yi tek taraflı olarak sona erdirerek, Kullanıcı’nın Cüzdan Sistemi’ne ve Cüzdan Hesabı’na erişimini kalıcı olarak sonlandırabilir. Kullanıcı, bu fesihten dolayı Farmazon’dan herhangi bir talepte bulunamayacağını peşinen kabul etmektedir.

Bu durumda eğer fesih tarihinde Kullanıcı’nın Cüzdan Hesabı içerisinde bakiye var ise, bu bakiye Sözleşme’nin sona erme tarihinden itibaren 30 gün içerisinde Kullanıcı’ya iade edilecektir. 

21. Kullanıcı’nın Site üzerindeki üyelik hesabını tamamen kapatması veya sadece üyelik hesabına bağlı Cüzdan Hesabı’nı kapatması halinde, üyelik hesabının veya Cüzdan Hesabı’nın kapatıldığı tarih itibariyle Kullanıcı’nın Cüzdan Hesabı içerisinde bakiye var ise, bu bakiye kapatma tarihinden itibaren 30 gün içerisinde Kullanıcı’ya iade edilecektir.

 

22. İşbu Sözleşme, Üyelik Sözleşmesi ve/veya yürürlükteki mevzuat hükümlerine aykırı davranan Kullanıcı, söz konusu eylemlerinden dolayı; Farmazon’un, diğer Site üyelerinin, üçüncü kişilerin, idari/resmi makamların ve yargı makamlarının yönelttikleri bütün dava (hukuk/ceza), talep, şikayet ve/veya idari para cezaları karşısında, Sözleşme süresince ve Sözleşme herhangi bir sebeple sona erdikten sonra da, tek başına sorumlu olacaktır. 

Farmazon dilerse bu bedelleri; Kullanıcı’nın Cüzdan Hesabı üzerindeki bakiyesinden ve/veya Site üzerindeki satışları sebebiyle hak kazanmış olduğu/kazanacağı bedellerden (Sözleşme sona ermiş olsa bile) mahsup edebilir.

Kullanıcı’nın işbu Sözleşme ve/veya Üyelik Sözleşmesi ve/veya yürürlükteki mevzuat hükümlerini ihlal eden ve/veya bu ihlale yönelik davranışların tespiti halinde, Farmazon’un zararlarının tazmini dahil tüm hakları saklı kalmak üzere işbu Sözleşme’yi tek taraflı olarak feshetme ve Kullanıcı’nın Cüzdan Hesabı’na erişimini kalıcı olarak sonlandırma hakkı saklı bulunmaktadır. Bu durumda Farmazon, sadece işbu Sözleşme’yi feshederek Kullanıcı’nın Cüzdan Sistemi’ne/Cüzdan Hesabı’na erişimini kapatabileceği gibi, işbu Sözleşme ile birlikte Üyelik Sözleşmesi’ni de feshetme hakkına sahiptir.

Bu fesihten dolayı Kullanıcı, herhangi bir talepte bulunamayacağını peşinen kabul etmektedir.

23. Farmazon’un işbu Sözleşme kapsamında sağladığı Cüzdan Sistemi, 6493 sayılı Kanun (“Kanun”) m.18/5 düzenlemesi uyarınca, Kanun kapsamı dışındadır. 

Farmazon tarafından sunulan Cüzdan Sistemi Kanun kapsamında olmadığından, Farmazon işbu Sözleşme uyarınca Kullanıcı’ya Kanun ile düzenlenen elektronik para hizmetlerinin sunulmasına ilişkin herhangi bir taahhütte bulunmamaktadır. Kullanıcı, Kanun ve ilgili mevzuat uyarınca Farmazon’dan herhangi bir talepte bulunamaz. 

Cüzdan Sistemi; mevzuat değişikliği veya Türkiye Cumhuriyet Merkez Bankası kararı/bildirimi sebebiyle, belirtilen Kanun kapsamına dahil edildiği takdirde, işbu Sözleşme kendiliğinden hükümsüz hale gelecektir. Bu durumda Farmazon, Kullanıcı’nın Cüzdan Hesabı’nı derhal kapatacaktır. Cüzdan Hesabı’nın kapatıldığı tarih itibariyle Kullanıcı’nın Cüzdan Hesabı içerisinde bakiye var ise, bu bakiye Sözleşme’nin sona erme tarihinden itibaren 30 gün içerisinde Kullanıcı’ya iade edilecektir. 

24. Herhangi bir sebeple Üyelik Sözleşmesi sona erdiği takdirde, işbu Sözleşme de kendiliğinden sona erecek ve Cüzdan Hesabı içerisinde bakiye var ise, bu bakiye sona erme tarihinden itibaren 30 gün içerisinde Kullanıcı’ya iade edilecektir.

25. İşbu Sözleşme kapsamında; bakiyenin Kullanıcı’ya iade edileceği durumlarda bakiye Kullanıcı’nın Cüzdan Hesabı’na yükleme yaptığı ve/veya iptal/iade işlemine konu ödemeyi yapmış olduğu kredi kartı veya debit kartına iade edilecektir. Kullanıcı, söz konusu bakiyenin farklı bir kredi kartına/debit kartına veya kendisine nakden iade edilmesini talep edemez.

 

İade işleminin bankaya bağlı bir nedenle veya kredi kartı ve/veya debit kartının iptal edilmiş olması/süresinin sona ermiş olması nedenleriyle gerçekleştirilememesinden Farmazon hiçbir surette sorumlu olmayacaktır.

26. İşbu Sözleşme’den kaynaklanabilecek ihtilaflarda, İstanbul (Çağlayan) Mahkemeleri ve İcra Daireleri yetkilidir.

İşbu Sözleşme, Kullanıcı tarafından tamamıyla okunarak elektronik ortamda onaylanmak suretiyle akdedilmiş ve süresiz olarak yürürlüğe girmiştir.`,
    },
    {
      id: 16,
      title: "Üyelik Sözleşmesi",
      yazarlar: "Melik",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `MADDE 1- TARAFLAR

1.1. İşbu üyelik sözleşmesi ("Üyelik Sözleşmesi" veya “Sözleşme” olarak anılacaktır) Levent Mahallesi, Şakayıklı Sokak No:9 Beşiktaş/İstanbul adresinde mukim Mesa Verde Vitamin Kozmetik ve Gıda Takviyeleri Ticaret Anonim Şirketi (Bundan sonra “Farmazon” olarak anılacaktır.) ile Üye (Bundan sonra "Üye" olarak anılacaktır.) arasında, Üye'nin, Farmazon’un www.farmazon.com.tr isimli web sitesinde sunduğu Hizmetler'den yararlanmasına ilişkin koşulların belirlenmesi için akdedilmiştir.

1.2. Farmazon ile Üye işbu Üyelik Sözleşmesi'nde münferiden "Taraf" ve müştereken "Taraflar" olarak anılacaktır.`,
    },
    {
      id: 17,
      title: "Kullanım Koşulları",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `1. İşbu “Kullanım Koşulları” kapsamında kullanılan aşağıdaki ifadeler, yine aşağıda belirtilen anlamları taşıyacaktır: 

a) Şirket: Mesa Verde Vitamin Kozmetik ve Gıda Takviyeleri Ticaret Anonim Şirketi

 

b) Koşullar: İşbu “Kullanım Koşulları” 

c) Site: Kullanıcı’nın işbu Koşullar doğrultusunda giriş yaptığı internet sitesi, bağlantılı mobil internet sitesi ve/veya “Farmazon” mobil uygulaması

d) Kullanıcı: Herhangi bir mobil veya dijital cihaz vasıtasıyla Site’ye giriş yapan bütün gerçek kişiler 

e) Aydınlatma Metni: Site’de erişilebilen ve işbu Koşullar’ın ayrılmaz bir parçasını oluşturan Kişisel Verilere İlişkin Aydınlatma Metni

 

2. Kullanıcı, Site’ye giriş gerçekleştirdiği andan itibaren, Site’den yararlandığı sürenin uzunluğuna bakılmaksızın, Koşullar’da yer alan hükümleri okumuş ve onaylamış sayılacaktır. 

 

Koşullar’da yer alan hükümler ile bağlı olmak istemeyen Kullanıcı, Site üzerindeki girişini sonlandırmak zorundadır.

Kullanıcı; Koşullar’ı açıkça okuyup anladığını, Site’yi ancak bu Koşullar’a uyarak kullanabileceğini, bu Koşullar’a aykırı davrandığı takdirde bütün sorumluluğun kendisine ait olduğunu ve Şirket’in, işbu Koşullar’a uygun davranılmaması sebebiyle doğacak bütün zararlarını kendisine rücu edeceğini bildiğini kabul, beyan ve taahhüt eder. 

3. Kullanıcı; Site üzerinde tersine mühendislik yapmayacağını, Site üzerindeki yazılımların kaynak kodunu çıkarmayacağını, Site üzerinde herhangi bir izinsiz giriş gerçekleştirmeyeceğini, Site’nin sunucularına erişmeye ve/veya sunuculardaki verilere zarar vermeye çalışmayacağını, aksi takdirde hakkında Türk Ceza Kanunu m.243 ve 244 uyarınca suç duyurusu dahil olmak üzere her türlü hukuki-cezai yasal yola başvurulabileceğini kabul, beyan ve taahhüt eder.

4. Kullanıcı, Site üzerinde sadece hukuka uygun ve/veya suç içermeyen işlemler gerçekleştireceğini, hukuka aykırı ve/veya suç içeren hiçbir eylem gerçekleştirmeyeceğini kabul, beyan ve taahhüt eder. 

5. Kullanıcı’nın, Site’ye kötü niyetli üçüncü kişiler tarafından yüklenen zararlı yazılımlar sebebiyle, Şirket tarafından alınan güvenlik önlemlerine rağmen doğacak zararlarından Şirket sorumlu değildir. 

6. Kullanıcı; Şirket’e ait gizli bilgilere/ticari sırlara erişim sağlayamaz, değiştiremez, bozamaz, kopyalayamaz ve hiçbir şekilde kullanamaz. 

7. Şirket, teknik sorunlar nedeniyle Site’de oluşabilecek kesintilerden dolayı Kullanıcı’nın yaşayacağı sorunlardan sorumlu değildir.

8. Şirket, Site üzerinde her türlü reklam içeriklerine yer verebilir. 

Şirket, Site üzerinden, Şirket’in kendi kontrolünde olmayan üçüncü kişilerin sahip olduğu ve işlettiği başka web sitelerine, dosyalara veya içeriklere URL adresi/ 'link' verebilir. Bu 'link'ler, herhangi bir web sitesi veya içerdiği bilgilere yönelik herhangi bir türde bir beyan veya garanti niteliği taşımamaktadır. Site üzerindeki 'link'ler vasıtasıyla erişilen web siteleri, dosyalar, içerikler, hizmetler veya ürünler hakkında Şirket’in herhangi bir sorumluluğu yoktur. Şirket’e ait olmayan internet siteleri Koşullar kapsamında olmayıp, Şirket, Kullanıcı’nın bu internet siteleri üzerinde uğrayabileceği hiçbir zarardan sorumlu değildir.

 

9. Kullanıcı; fikri mülkiyet hakları Şirket’e ait olan Site’yi, Site ile ilişkili yazılımları, fotoğrafları, görselleri, yazılı içerikleri, görsel-işitsel içerikleri ve bunlarla sınırlı olmamak üzere her türlü öğeleri izinsiz olarak kullanmayacağını, kopyalamayacağını, değiştirmeyeceğini, satmayacağını ve/veya herhangi bir şekilde umuma iletmeyeceğini kabul, beyan ve taahhüt eder.

10. Şirket, dilediği zaman Site’de, Site’nin kullanımında veya Site’nin arayüzünde değişiklikler yapabilir. 

11. Şirket; dilediği zaman Site’yi Kullanıcı’nın kullanımına kapatabilir. Böyle bir durumda Kullanıcı’nın Şirket’ten herhangi bir talebi olamaz. 

12. Site üzerinde paylaşılan bilgilerin gizliliği ve Kullanıcı’nın kişisel verilerinin işlenmesine ilişkin esaslara, Site’nin Aydınlatma Metni’nde yer verilmiştir. Kullanıcı, Site’ye girişi anından itibaren Aydınlatma Metni’ni okumuş, anlamış ve Kişisel Verilerin Korunması Kanunu ve ilgili mevzuat hükümleri doğrultusunda aydınlatıldığını ve bilgilendirildiğini kabul etmiş sayılır. 

 

13. Şirket Koşullar’ı istediği şekilde değiştirebilir veya Koşullar’a geçici olarak son verebilir. Şirket’in Koşullar’da değişiklik yapması halinde, değişiklik tarihinden itibaren tüm Kullanıcılar açısından yeni Koşullar uygulanır. 

 

14. İşbu Koşullar’ın uygulanmasında ve Koşullar ile ilgili doğacak tüm uyuşmazlıkların çözümünde Türk Hukuku uygulanacaktır. Koşullar’ın uygulanmasından doğan her türlü ihtilafta İstanbul (Çağlayan) Mahkemeleri ve İcra daireleri yetkilidir.

 

15. İşbu Kullanım Koşulları, Site’de yayınlandığı an yürürlüğe girer ve herhangi bir şekilde Site’yi kullanan ya da Site’ye giriş yapan Kullanıcı açısından ayrıca bir işleme gerek kalmaksızın bağlayıcı olur. Kullanıcı, işbu Kullanım Koşulları’nın güncel haline her zaman Site üzerinden erişebilir.`,
    },
    {
      id: 18,
      title: "Farmazon Puan Sistemi Renklendi",
      tanim:
        "Yeni onluk sistemde satıcı puanlarını aldıkları renge göre değerlendirebilir, bu sayede daha isabetli alım tercihleri yapabilirsiniz",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Onluk sistem ne demek?

Farmazon'da daha önce 5 (beş) üzerinden puanlanan satıcı performansları artık 10 (on) üzerinden puanlanıyor. Sisteme geçerken tüm satıcı puanları ikiyle çarpıldı. Dolayısıyla puan hesaplamalarında herhangi bir değişiklik olmayacak. 

Puanların aldığı renkler ne ifade ediyor?

Satıcı puanlarının renklenmesi, alıcı eczacılarımızın alım yaparken satıcı performanslarını daha pratik bir şekilde değerlendirmesine fırsat tanıyor. Koyu yeşil puanlar en yüksek, kırmızı puanlar en düşük satıcı performanslarını işaret ediyor. Yukarıdaki tabloda puan dağılımını inceleyebilirsiniz.

Her satıcının rengi sabit mi olacak?

Hayır. Puanlar, alıcı eczacılarımızın alışveriş deneyimine göre şekillendiği için değişkenliğini koruyor. Sipariş sayıları ve hata oranlarına göre satıcı eczacılarımızın aldıkları puan düşüp yükselebilir. Buna bağlı olarak puan renkleri de tablodaki aralıklara uygun şekilde değişecektir.

Puan alanındaki soru işareti ikonu ne anlama geliyor? 

Satıcı performansının ölçülebilmesi için, satıcı eczacımızın aylık olarak belli bir sipariş sayısının üzerine çıkması gerekiyor. Eğer o ay içinde yeteri kadar sipariş alamadıysa puansız, dolayısıyla soru işaretli olarak görünüyor.

`,
    },
    {
      id: 19,
      title: "Yorum yaınlama kriterleri",
      tanim:
        "Ürün yorumlarınızı yayına almadan önce göz önünde bulundurduğumuz kriterleri bu sayfada bulabilirsiniz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `<div>
          <b>Test Başlık </b>
          <span style="color:red;">Kırmızı yazı</span>
          </div>`,
    },
    {
      id: 20,
      title: "Cüzdan nedir? Ne işe yarar?",
      tanim:
        "Para iadeninizi hiçbir banka prosödürüne takılmadan anında hesabınıza aktarıp istediğiniz zaman kullanabilmek için Cüzdan'dan yararlanın. ",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Farmazon'daki ürün değerlendirmesi alanı ürüne dair edindiğiniz eczacı deneyimini meslektaşlarınızla paylaşabilmeniz için tasarlandı. 

Ürünü, eczanenizdeki satış performansından hastalarınızdan aldığınız geri bildirimlere kadar istediğiniz yönleriyle değerlendirebilir; eczacılarımızın alım tercihlerine deneyimlerinizle yön verebilirsiniz.

Ürün yorumlarınız sadece ürüne dair olmalıdır. Sipariş sürecine dair değerlendirmenizi sipariş yorumu bölümünden satıcı profiline ekleyebilirsiniz. 

Yorumlarınız Farmazon'un onay sürecinden geçtikten sonra kullanıcı adınızla birlikte yayınlanır. Dilerseniz kullanıcı adınızı gizleyebilirsiniz. Hukuka ve kişisel haklara aykırı değerlendirmeler, ürün ve kullanıcı reklamları, diğer yorumlara yönelik saldırı ve tehdit içeren paylaşımlar yayına alınmaz. 

Yorumunuz ne kadar açık ve güncel olursa meslektaşlarınız için o kadar yol gösterici olacaktır. Bu yüzden ürünle ilgili olumlu ya da olumsuz düşüncelerinizi belirleyici detaylarla anlatmanızı rica ediyoruz. 

Ürün değerlendirmesi yapmaya zaman ayırdığınız için teşekkür ederiz.

`,
    },
    {
      id: 21,
      title: "Farmazonda Bugün & Yarın Teslim dönemi başladı!",
      tanim:
        "Pazartesi'den Cumartesi'ye 12.00'a kadar verdiğiniz siparişler aynı gün 12.00'dan sonra verdikleriniz ertesi gün eczanenize geliyor.",
      yazarlar: "Murat Ersoy",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `<b>Bugün Teslim nedir?</b>

Bugün Teslim, Farmazon'dan satın aldığınız ürünlerin size aynı gün içinde teslim edilmesini sağlayan hizmettir. Bugün Teslim siparişi vermek isterseniz iki önemli detayı göz önünde bulundurmanızı rica ediyoruz.

1. Bugün Teslim uygulaması şimdilik sadece İstanbul, Ankara, Bursa'nın belirli bölgelerinde!

2. Yalnızca Bugün Teslim logolu satıcıların ürünleri bu hizmete dahil.`,
    },
    {
      id: 22,
      title: "Kargo Maaliyetinizi %60 a kadar düşürebilirsiniz.",
      tanim:
        "Aşağıdaki dört tavsiyeye uyarak Farmazon siparişlerinizin kargo maliyetini büyük ölçüde düşürmeniz mümkün!",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `<div>
          <b>Test Başlık </b>
          <span style="color:red;">Kırmızı yazı</span>
          </div>`,
    },
    {
      id: 23,
      title: "Outler Kategorisi Yayında!",
      tanim:
        "Outlet kategorisiyle ilgili merak ettiklerinizi 5 maddede özetledik.",
      yazarlar: "Murat Ersoy",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `1- Outlet kategorisi hangi tür ürünleri kapsıyor?
Bu kategoride kofreden ayrılmış, puansız, kutusuz ve eski ambalajlı ürünlere ulaşabilirsiniz. Normalden daha uygun fiyatlara satışa çıkarılan bu ürünlerin ilanlarını, bundan sonra Outlet sayfasında toplu olarak inceleyebilirsiniz.

2- Outlet kategorisi neden açıldı?
Farmazon olarak eczacılarımızın ürün arama deneyimini çeşitlendirmek için, son dönemde ilan sayıları artan bu ürünleri tek sayfa altında toplamak istedik.

3- Sattığım ürünler Outlet sayfasına nasıl ekleniyor?
İlan eklerken ürün adında belirttiğiniz “kofreden ayrılmış, puansız, kutusuz, eski ambalajlı” ibareleri, ürünlerin otomatik olarak Outlet sayfasında da tanımlanmasını sağlayacak.

4- Outlet sayfasına yeni alt kategoriler eklenecek mi?
Sizlerden aldığımız geri bildirimlere göre, ihtiyaç duyulursa çeşitli geliştirmeler yapılacaktır.

5- Hasarlı ürünler bu sayfaya eklenebilir mi?
Hayır. Hasarın niteliği ve boyutunun göreceli oluşu, hasar seviyesinin görsel ve metinsel olarak belirsiz bir karşılığı olması nedeniyle, bu tür ürünlerin Farmazon’da satışı yapılmamaktadır.

Outlet ürünlerini incelemek için buraya tıklayın. 
`,
    },
    {
      id: 24,
      title: "İade ve iptal Koşulları",
      tanim:
        "Farmazon üzerinden verilen siparişler için iade ve iptal koşulları ile ilgili detaylı bilgiyi burada bulabilirsiniz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Sitemiz üyeleri tüketici olmadıklarından, iki ticari yapı arasında yapılan tüm alışverişlerde olduğu gibi, sadece ürün hasarlı, ayıplı, eksik, farklı vb. şekilde ulaştıysa iade edebilirsiniz. Böyle bir durum varsa, iade / değişim sürecinin başlaması için Müşteri Hizmetleri ekibimize gerekçe ve görsel kanıt sunmanız bekleniyor. İadeniz ekibimiz tarafından onaylandığı takdirde, ürünü iade edebilirsiniz.


Ürünü teslim aldıktan sonra hasarlı, ayıplı, eksik, farklı vb. olduğunu Farmazon'a bildirmek için ne kadar zamanım var?

Ürünü teslim almanızdan itibaren 8 (sekiz) gün içerisinde, Farmazon'a ürüne dair yaşadığınız sorunu bildirebilirsiniz. 8 gün sonunda herhangi bir sorun bildirilmediyse, alıcı satılanı kabul etmiş sayılır.


İade etmek istediğim ürünü göndermek için ne kadar zamanım var?

Ekibimize iade başvurusunda bulunmanızdan itibaren en geç 3 (üç) gün içerisinde ürünü kargo firmasına teslim etmeniz gerekiyor. Bu süre aşılırsa, ne yazık ki iade hakkınızı kaybediyorsunuz.


İade / değişim kargosunu gönderirken nelere dikkat etmeliyim?

İade / değişim sürecinde ürünün daha fazla hasar almaması için gerekli önlemleri almanızı ve ürünü korunaklı bir şekilde göndermenizi rica ediyoruz. 


İade / değişim kargosunu kim öder?

Müşteri Hizmetleri ekibimizden onay aldıktan sonra, iade kargonuzu Farmazon'un anlaşmalı kargo şirketlerinden biriyle ve o iadeye özel üretilmiş Farmazon Öder koduyla ücretsiz olarak gönderebilirsiniz. İade kargosunun bedeli satıcı tarafından karşılanır.


Para iademi ne zaman alırım?

Hasarlı, ayıplı, eksik, farklı vb. ürün satıcının eline geçer geçmez, para iadesi süreci başlar. Kendilerine teslim edildikten sonra, bankanızın iade politikasına göre 1-3 iş günü içinde para iadeniz hesabınıza gönderilir. Bu süreçte ürün bedelinin satıcıya aktarılmaması için siparişe onay vermemenizi rica ediyoruz.


Değişim halinde, yeni ürün ne zaman elime geçer?

Hasarlı, ayıplı, eksik, farklı vb. ürünü satıcıya korunaklı şekilde gönderdikten sonra, ürünün satıcının eline geçmesi beklenir. Daha sonra satıcı yeni ürünü tarafınıza gönderir ve ortalama 1-3 iş günü içinde kargonuz teslim edilir.


İade faturası kesmek zorunda mıyım?

Satıcı e-fatura mükellefi değilse: Siparişin tamamını iade ediyorsanız ve faturanın üzerinden 1 (bir) haftadan az süre geçtiyse, satıcının faturasını pakete ekleyerek siparişinizi iade edebilirsiniz. 

Ancak kısmi iade yapacaksanız, ürün size nasıl ulaşmış olursa olsun iade faturası kesip pakete eklemek zorundasınız.

Satıcı e-fatura mükellefiyse: Hem toplu hem de kısmi iadelerde iade faturası kesmek zorundasınız.


Kargom hasarlı geldi, teslim almalı mıyım?

Kargonuz ezik, kırık, ambalajı yırtılmış vb. şekilde geldiyse, kargo şirketinden teslim almamanız, tutanak tutturmanız ve kutunun hasarlı kısmının fotoğraflarını ekibimizle paylaşmanız gerekiyor. 


Kargom hasarlı geldi ve teslim aldım. Ne yapmalıyım?

Tutanak tutturduktan sonra, kutunun iç ve dış kısmının fotoğraflarını çekip Müşteri Hizmetleri ekibimize göndermeniz gerekiyor. Bu sayede ekibimiz satıcının kargolama / paketleme şeklini görebilecek ve ürünlerin korunaklı paketlenip paketlenmediğini belgeleyebilecektir. Kutunun teslimi anında tutanak tutturamadıysanız, aynı gün içinde kargo şubesine uğrayıp bu işlemi gerçekleştirebilirsiniz.


Siparişim henüz satıcı tarafından onaylanmadı, iptal edebilir miyim?

Evet. Ürün satıcı tarafından onaylanıp hazırlanma aşamasına geçmediyse, Sipariş Detayı sayfanızdan siparişinizi iptal edebilirsiniz. Yaptığınız ödeme, bankanızın iade politikasına göre 1-3 iş günü içinde hesabınıza iade edilir.


Siparişim tamamlandı, ödemem aktarıldı, ürünü iade edebilir miyim?

Hayır. Ancak bu durumun istisnaları mevcut. Tıbbi cihazlarda, alıcı olarak ürünün bozuk olduğunu kanıtlarsanız 3 ay içinde iade edebilirsiniz. Ek olarak, sıradışı bir kargo gecikmesi sebebiyle ürün elinize geçmeden sipariş tamamlandıysa, üründe bir sorun tespit etmeniz halinde, Müşteri Hizmetleri ekibiyle bağlantı kurup iade işlemini başlatabilirsiniz.


Ürün ayıplı olmadığı halde, satıcıya ulaşıp iade talebinde bulunabilir miyim?

Eğer siparişiniz tamamlanıp ödemeniz aktarılmadıysa, elbette. İade talebinizi iletmek için satıcıya mesaj atabilirsiniz. Satıcının onayını alırsanız, kargo bedelini karşılayarak ürünü iade edebilirsiniz. İlk gönderimin bedelinin tarafınıza iade edilmeyeceğini eklemek isteriz. Bu yolu tercih ederseniz, Müşteri Hizmetleri ekibimizi haberdar etmeyi lütfen ihmal etmeyin. `,
    },
    {
      id: 25,
      title: "Farmazon Fatura Entegrasyonları",
      tanim:
        "Artık Farmazon faturalarınızı botanik,Farmassist ve İlon eczane otomasyon programlarıyla otomatik olarak aktarabilirsiniz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Botanik, Farmassist ve İlon uygulamalarının Farmazon entegrasyonları sayesinde stok ve maliyetinizin kontrolünü sağlamak çok daha kolay.  

Entegrasyon için lütfen sağ alt köşede açılan yardım penceresinden Farmazon'la iletişime geçin. Ekibimiz hesabınızı tanımladıktan sonra, Farmazon kullanıcı adı ve şifrenizi kullanarak tercih ettiğiniz otomasyon programı üzerinden Farmazon faturalarınızı aktarabilirsiniz. 

Fatura aktarımı işlemlerine başlamak için, lütfen ilgili uygulamanın Müşteri Hizmetleri ekibiyle iletişim kurun.`,
    },
    {
      id: 26,
      title: "Farmazonda Nasıl Sipariş Veririm ?",
      tanim:
        "Farmazonda karlı alışveriş ipuçlarını alıcı kurallarını ve işlem rehberini burada bulabilirsiniz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Nasıl ürün satın alabilirim?
GLN'niz ile üye olduktan sonra Farmazon'da bulunan ürünleri alışveriş sepetinize atıp kredi kartınızla ödeme yaptıktan sonra ürünler kargo ile size teslim edilecektir. 

Aradığım ürünü nasıl bulurum?
Sayfanın üst tarafında yer alan arama kutusuna istediğiniz ürünün ismini yazın. Listelenen sonuçlarda aradığınız ürüne tıklayıp o ürünü satan üyelerimizi görebilir, fiyat ve miat seçenekleriyle sıralama yaparak size en uygun olanı sepetinize ekleyebilirsiniz. Arama kutusuna aynı zamanda kategori, marka veya kullanıcı isimleri de yazabilirsiniz.

İstediğim ürünü buldum fakat stok olmadığı için satın alamıyorum. Ne yapmalıyım?
Ürünü "Beklediklerime Ekle" butonuna tıklayarak beklediklerim listenize kaydedebilirsiniz. Bu listeye kaydettiğiniz ürünler için yeni ilan eklendiğinde size haber veririz.

Satıcının diğer ürünlerini nasıl görebilirim?
Arama bölümünde kullanıcı adıyla arama yaparak ya da ürün sayfalarındaki kullanıcı adına tıklayarak üyelerimizin profil sayfalarına ulaşabilir ve listeledikleri diğer ürünleri görebilirsiniz. Ayrıca ürün ya da ilan sayfalarından satıcı adına tıkladığınızda da satıcının ürünlerini listelediği sayfaya ulaşabilirsiniz. 

Alıcılar Farmazon’da, 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında
Kanun madde 3/3 uyarınca satış işleminden önce Alıcılar ile Satıcının bilgilerinin
paylaşılmadığını bildiklerini ve bu kapsamda bir taleplerinin bulunmadığını
kabul ve beyan ederler.

Nasıl ödeme yapabilirim?
Ödemeler "Farmazon Güvenli Ödeme Sistemi" aracılığıyla bireysel, ticari kredi kartları, sanal kartlar ve banka kartlarıyla yapılabilir. Sepetinizdeki ürünleri satın almadan önce ödeme sayfasında eczane adresinizi ya da kendi tanımlayacağınız alternatif bir teslimat adresini seçtikten sonra ürün bilgilerini kontrol edip  ödemenizi tamamlayabilir, ya da sepetinize dönebilirsiniz.

Satın alma işlemi tamamlandığında size bir ödeme onay e-postası gönderilir. Daha sonra sırasıyla satıcının siparişinizi onaylanması, siparişinizin kargoya teslim edilmesi ve alışverişinizin tamamlanması aşamalarında e-postayla bilgilendirilirsiniz. 

Yapılan ödeme Farmazon'un yönettiği havuz hesabında tutulur ve alıcı onayı sonrasında satıcıya aktarılır.

Farmazon güvenli mi? 
Kesinlikle. Tüm ödemeleriniz Farmazon ödeme sisteminin güvencesi altında gerçekleşir. Farmazon Güvenli Ödeme Sistemi ile ilgili detaylı bilgiye buradan ulaşabilirsiniz.

Satın aldığınız ürün veya hizmete ilişkin olarak satıcı ve alıcı arasında online olarak kurulan Ön Bilgilendirme Formu ile Mesafeli Satış Sözleşmesi, Farmazon veritabanında saklanır ve "Aldıklarım" sayfasından her sipariş için ulaşılabilir.

Ürünleri teslim alırken nelere dikkat etmeliyim? 
Teslimat süresi boyunca "Aldıklarım" sayfasından kargo takip linkini tıklayarak kargonuzu takip edebilirsiniz. Alıcılar kargoyu teslim aldıkları anda, kargo görevlisinin yanında paketi açıp üründe herhangi bir hasar olup olmadığını kontrol etmeli ve herhangi bir hasar varsa buna ilişkin kargo görevlisine tutanak tutturmalıdır. Böyle bir durumda Alıcı, Farmazon’u mutlaka bilgilendirmelidir.

Ödemeler ne zaman satıcıya aktarılır? 

Alıcıların yapmış olduğu ödemeye ilişkin tutar, alıcıların ürünlerin ellerine güvenli bir şekilde ulaştığını onayladıkları ve teslim sürecine bir itirazı olmadığı takdirde en erken ödeme tarihinden tam 7 gün sonra olmak koşulu ile kargoya veriliş tarihinden 5 gün sonra satıcının hesabına otomatik olarak aktarılır. 

Olası bir gecikme sebebiyle alıcı kargoyu bir haftadan uzun bir sürede teslim aldığını belirtirse ödeme tutarı satıcıya bu onaydan bir gün sonra aktarılır. 

Siparişimle ilgili bir problem olduğunda ne yapmam gerekir?
Öncelikle sipariş sonrası destek bölümüne göz atmanızı rica ederiz. Buradaki durumlara göre işlem yapabilir, canlı yardım üzerinden her zaman bize ulaşabilirsiniz.

Nasıl iade yapabilirim? 
Alıcılar iade süreci ile ilgili her zaman canlı destek bölümü üzerinden Farmazon müşteri hizmetleri ekibiyle iletişim kurulmalıdır. İade edilecek ürünler iade faturasıyla birlikte (toplu iade için orijinal fatura ile birlikte) Farmazon’un vereceği kargo kodu kullanılarak anlaşmalı kargo üzerinden yollanmalıdır. Aksi takdirde kargo sırasında oluşabilecek kaybolma gibi problemlerden alıcı sorumlu olacaktır. Detaylı bilgi için "İade ve İptal koşulları"nı okuyabilirsiniz. 

Ne kadar kargo ücreti öderim?  
Satıcı tarafından kargo kampanyası yapılmadığı durumlarda alıcı, satıcı başına sabit kargo ücretini ve gerekli hallerde ek kargo ücretini ödemekle yükümlüdür.

Satıcıların bedava kargo yaptığı hallerde ise alıcının kargo ödeme yükümlülüğü söz konusu değildir. 

Her satıcı için ayrı kargo ücreti mi ödemem gerekiyor? 
Evet. Verdiğiniz siparişler tek bir merkezden değil Türkiye’nin bütün illerinde bulunan satıcılar tarafından gönderilmektedir. Bu nedenle sipariş verdiğiniz her farklı satıcı için ayrı kargo ücreti alınır. Bu uygulama N11, HepsiBurada veya GittiGidiyor gibi pazar yeri modeliyle işleyen bütün sitelerde standarttır.

Farmazon'da nasıl daha karlı alışveriş yaparım? 
Satın almak istediğiniz ürünleri tek bir üyemizden alarak ödeyeceğiniz kargo ücretini düşürebilir ya da üyelerimizin uygulamış olduğu bedava kargo kampanyalarından faydalanmak için daha büyük siparişler verebilirsiniz.

Farmazon'da nasıl E-Fatura Kontör Paketi alırım? 
E-Fatura kontörleri ile ilgili tüm işlemleri Farmazon E-Fatura sayfasından yapabilirsiniz. Burada dilediğiniz paketi seçtikten sonra doğrudan kredi kartı bilgilerinizi girerek siparişinizi tamamlayabilirsiniz.

Alıcılar, Üyelik Sözleşmesi’ni, Kullanım Koşulları'nı, İade & İptal Koşulları’nı, Gizlilik ve Kişisel Veriler Politikasını ve sitede bulunan diğer sözleşme ve politikaları incelemekle yükümlü olup bu sözleşme ve politikaları bildiğini kabul ve beyan eder. Alıcılar işlemlerini bu sözleşme ve politikalara uygun olarak gerçekleştirmekle yükümlüdür. Alıcılar, Farmazon’un Aracı Hizmet Sağlayıcı olduğunu ve işbu sebeple Satıcıların koyduğu ürünlerden, bu ürünlere ilişkin hukuka aykırı faaliyet ve durumlardan sorumlu olmadığını kabul ve beyan eder.

`,
    },
    {
      id: 28,
      title: "Sipariş Sonrası Destek",
      tanim:
        "Sipraişiniz Sırasında ya da sonrasında yaşanabilecek problemlerle ilgili detaylı bilgileri burada bulabilirsiniz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Siparişim iptal edildi.
Üyemiz siparişi gönderemeyecek durumdaysa siparişi iptal edebilir. Sipariş iptal edildiği takdirde ödemeniz kartınıza iade edilir. Farmazon'da sipariş iptali çok fazla yaşanan bir durum değildir.

Siparişlerim ne zaman kargoya verilir?
Ürünler genelde siparişin geldiği gün ya da ertesi gün kargoya verilir. Üyelerimizin ortalama ne kadar sürede ürünleri kargoladıklarını, profil sayfalarındaki Ortalama Gönderim Süresi bölümünde görüntüleyebilirsiniz.

Kargom elime ulaşmadı.
Gönderilen ürünlerin kargo takip bilgilerini Sipariş Detay sayfasında görebilirsiniz. Bu sayfada bulunan kargo takip linki sayesinde siparişinizin ne zaman kargoya verildiği, şu an nerede olduğu ve planlanan teslimat tarihini görüntüleyebilirsiniz.

Bazı üyelerimiz kendi kargo anlaşmalarını kullandıkları için bu bilgiler her siparişte görüntülenemeyebilir. Bu gibi durumlarda mesaj göndererek kargo takip numarası isteyebilir ya da destek bölümünden bize ulaşarak yardım alabilirsiniz.

Sepette kargo ücreti ödememe rağmen teslimat sırasında benden kargo ücreti istendi.
Bir karışıklık olur da kargo görevlisi teslimat anında sizden ödeme talep ederse, lütfen görevliden mevcut faturayı iptal etmesini ve kolinin üzerindeki 12 haneli kargo gönderim barkodu ile tekrar giriş yapmasını rica edin. Problemin devam etmesi durumunda lütfen canlı destek bölümü üzerinden bize ulaşabilirsiniz.

Siparişimdeki ürünlerden bazılar hasarlı geldi.
Siparişiniz geldiğinde kargo kuryesi yanınızdayken ürünleri kontrol edin ve hasarlı ürün varsa kuryeyle birlikte tutanak tutun. Sonrasında ürün değişimi için destek bölümünden bize ulaşarak yardım alabilirsiniz.

Özensiz paketlemeden kaynaklı hasarlarda iade veya değişim için ödenen kargo ücretlerini satıcılar karşılar. Bu süreç içinde lütfen siparişi tamamlamayın, ödemeyi satıcıya aktarmayın.

Yanlış miatlı ürün geldi.
Farmazon'da belirtilenden farklı miatta bir ürün size yollandığında değişim için ödenecek olan kargo ücreti satıcıya aittir. Canlı destek ekibimize ulaşarak elinizdeki ürünlerin değişimi için kargo kodu alabilir, bu kodu kullanarak ürünleri satıcıya geri gönderebilirsiniz. Bu süreç içinde lütfen siparişi tamamlamayın, ödemeyi satıcıya aktarmayın.

Siparişimde eksik var. Ne yapmalıyım?
Site üzerinden satıcıya mesaj göndererek eksik ürünleri tamamlamasını rica edebilirsiniz. Eksik ürün yollama satıcıdan kaynaklanan bir problem olduğu için yollanacak olan ikinci kargonun ücreti satıcıya ait olacaktır. Bu süreç içerisinde herhangi bir problem yaşamanız durumunda canlı destek bölümü üzerinden bize ulaşabilirsiniz.

Aldığım ürünleri iade edebilir miyim?
Farmazon'da son kullanıcıya satış yapılmadığı için, iki ticari yapı arasında gerçekleşen alışverişte yanlış, eksik, ayıplı ya da hasarlı ürün durumları söz konusu değilse, yasal olarak iade hakkı bulunmuyor. Satıcıdan kaynaklanan bir hata olmamasına rağmen iade talep ediyorsanız, henüz ödeme aktarılmadıysa, canlı destek ekibimizle iletişime geçerek satıcıya ricanızı iletebilirsiniz. Bu karar tamamen satıcının inisiyatifinde olup, eğer olumluysa kargo ücretini karşılamanız gerektiğini ve ürünlerin hasarsız şekilde iadesinden sorumlu olduğunuzu hatırlatırız. 

Satın aldığınız ürünlerin hepsini iade edecekseniz lütfen size gelmiş olan faturayı kargo paketine ekleyin. Satın aldığınız ürünlerin bir kısmını iade edecekseniz lütfen ilgili ürün ve adetler için iade faturası düzenleyin.

Bu süreç içerisinde kesinlikle ödemeyi satıcıya aktarmayın. Süreç tamamlandığında, iade edilen ürünlerin ödemesi Farmazon tarafından kartınıza yatırılacaktır.

Faturam gelmedi. / Fatura yerine fiş gönderilmiş.
Farmazon'da fatura göndermek zorunludur. Eğer kargonuzdan fatura çıkmadıysa ya da fatura yerine fiş gönderildiyse, destek bölümünden bize ulaşmanız durumunda tarafınıza fatura gönderilmesini sağlayabiliriz.

Faturamda kargo ücreti belirtilmemiş.
Yurtiçi Kargo anlaşmamızla gönderilen siparişlerde kargo faturası Farmazon tarafından ayrıca kesilir ve her ayın başında hizmet faturası olarak e-posta adresinize yollanır.

Göndermiş olduğumuz bütün e-faturaları "Hesap Hareketleri" sayfasında bulunan "Faturalar" sekmesinden indirilebilirsiniz.`,
    },
    {
      id: 29,
      title: "E-fatura Hakkında Merak Ettiğiniz Her Şey",
      tanim:
        "E-fatura hakkında aklınıza takılabilecek soruların cevaplarını tek sayfada topladık!",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `E-fatura uygulamasına geçmek zorunda mıyım? 

Yıllık cironuz 5.000.000 TL ve üzerindeyse, evet. 

Yıllık cironuz 5.000.000 TL ve üzerinde değilse, ancak vergi mükelleflerine tek seferde vergiler dahil 5.000 TL ve üzerinde fatura kesiyorsanız e-arşiv fatura uygulamasına geçmek zorundasınız. Rutin olarak kesilen SGK faturaları sebebiyle, eczanelerin büyük çoğunluğunun bu kapsama gireceğini düşünüyoruz. 


2. E-fatura ile e-arşiv fatura arasındaki fark nedir? 
E-fatura mükellefleri arasında kesilen faturalar e-fatura, e-fatura mükellefi olmayan kurumlara ya da şahıslara kesilen faturalar ise e-arşiv fatura olarak adlandırılıyor. 
E-fatura uygulamasına geçerseniz, otomatik olarak e-arşiv fatura sistemine de dahil oluyorsunuz.

3. E-arşiv faturayı nasıl keseceğim? 
E-arşiv faturayı ücretsiz olarak Gelir İdaresi Başkanlığının portalından ya da ücretli olarak bir e-fatura şirketinden hizmet alarak düzenleyebilirsiniz.


4. Gelir İdaresi Başkanlığının ücretsiz portalı yerine, neden ücretli olarak bir e-fatura şirketinden hizmet almalıyım?
E-fatura hizmeti veren bir şirketin portalı, fatura kesme işini en hızlı ve en pratik şekilde tamamlamanız için tasarlanmıştır. Kullanıcı dostu özelliği sayesinde sürece hızla uyum sağlarsınız. Detaylara boğulmadan, sorunsuz hizmet alırsınız. Üstelik e-fatura hizmeti veren bir şirket, 10 yıllık yasal süre boyunca belgeleri güvende ve daima ulaşılabilir tutar.


5. Vergi mükellefi olarak e-belgeleri neden saklamak zorundayım?
Vergi Usul Kanununa göre vergi mükellefleri tarafından düzenlenen e-belgelerin 10 yıl boyunca saklanması ve denetimler sırasında yetkililere beyan edilmesi gerekiyor. Aksi takdirde hapis istemine varan cezalarla karşı karşıya kalabilirsiniz.


6. SGK faturalarını ne zamana kadar kesmeliyim?
Hem e-fatura hem de e-arşiv fatura, en fazla 7 gün öncesine kesilebilir. SGK faturaları da her ayın son günü kesildiği için, bunları da en geç ayın 6’sında kesmiş olmalısınız.


7. E-defter kullanmak zorunda mıyım?
Hayır. 


8. E-fatura'ya geçiş yaptığımda kağıt fatura kesebilecek miyim?
Sadece ilk 7 gün için, evet. Ancak başvurunuzdan 7 gün sonra bu seçenek ortadan kalkıyor. 


9. E-fatura hizmeti alacağım şirket ile eczane otomasyon programım entegre olmalı mı?
Hayır. eLogo portalı üzerinden rahatlıkla faturanızı kesebilirsiniz. 

10. Fatura kontör uygulaması nedir?
Tüm e-fatura hizmeti veren şirketlerde hem alış hem satış faturalarınızdan kontör düşülüyor. 

Farmazon’un eLogo entegrasyonuyla; 

Alırken de satarken de her e-fatura 1 kontör,

Sadece satarken iki e-arşiv fatura 1 kontör değerinde!


11. Kaç kontör almalıyım?

Orta ölçekli bir eczane ayda 3-5 satış faturası kesiyor. Depolardan ise ayda 300-500 arası alış faturası kesildiğini tahmin ediyoruz. Alış faturalarınızdan da kontör düşüldüğü için, ilk aşamada 1000 kontör almanızın yeterli olacağını düşünüyoruz. Daha net bir bilgiye ulaşmak için depolardaki alış faturalarınıza bakabilirsiniz.


12. Kontör satın aldıktan sonra, e-fatura / e-arşiv fatura kesmeye nasıl başlayacağım? 

         a) E-imza başvurusu: E-imza sahibi olmak için herhangi bir e-imza şirketine              başvuruda bulunun.

        b) GİB başvurusu: E-imza aldıktan sonra, Gelir İdaresi Başkanlığına (GİB) aşağıdaki linkten başvuru yapın. Başvuru yöntemi olarak "özel entegrasyon"u seçmeyi unutmayın.
https://portal.efatura.gov.tr/efaturabasvuru/

        c) eLogo aktivasyonu: 
                  i) Aktivasyon sürecini başlatmak için eczane@elogo.com.tr adresine eczane adınızı ve telefon numaranızı gönderin veya 0537 597 62 38 - 0531 260 39 92 numaralarını arayarak ilgili satış temsilcilerine ulaşın.

                  ii) Görüşme esnasında sizinle paylaşılacak Entegratörlük Sözleşmesi'nin çıktısını alıp, ıslak imzalı halini eLogo'ya postalayın. Bu işlem için kargo ücreti vermenize gerek yok! Farmazon'dan kontör satın aldıktan sonra karşınıza çıkacak ücretsiz kargo kodunu kullanabilirsiniz.

                  iii) Gönderdiğiniz sözleşme eLogo'ya ulaşır ulaşmaz hesabınız aktif olur ve e-fatura / e-arşiv fatura kesmeye başlayabilirsiniz.

13. Farmazon'dan aldığım e-fatura kontörlerini nerede kullanabilirim?
Kontörlerinizi tüm alış ve satış işlemlerinizde kullanabilirsiniz. Farmazon, SGK, ecza depoları faturalarında ve aklınıza gelen her fatura işleminde!  

14. Farmazon'a özel fiyatlardan kimler faydalanabilir?
Önceden eLogo ya da Logo ERP kullanıcısı olmayan tüm eczacılarımız faydalanabilir. eLogo ya da Logo ERP kullanıcılarına özel fiyatlar için lütfen bizimle iletişime geçin.


15. Neden Farmazon e-faturayı seçmeliyim? 
Altı önemli sebebiniz var: 

Sadece Farmazonlulara sunulan inanılmaz fiyatlar 

Kontörlerinizi süre limiti olmadan, dilediğiniz zaman kullanma fırsatı

Eczacılara özel modül ile SGK formatına uygun fatura kesme kolaylığı

Kolay kurulum, hızlı geçiş ve Farmazon üyelerine sunulan özel destek hizmeti

35 yıllık tecrübesi, gelişmiş altyapısı ve ödüllü ekibiyle Türkiye'nin en büyük e-fatura sağlayıcısı eLogo ile çalışma ayrıcalığı

Çok yakında Farmazon satış faturalarınızı alıcı eczacılarımıza otomatik olarak gönderme imkanı


16. Herhangi bir ek ödeme var mı? (Aktivasyon ücreti, üyelik, vb. )
Hayır. Kontör ücreti dışında herhangi bir kullanım bedeli, aktivasyon ücreti, vb. kesinlikle alınmıyor. Hatta göndermeniz gereken ıslak imzalı sözleşmenin kargo ücretini dahi Farmazon karşılıyor. 


17. Peki, gelecekte herhangi bir ek ödeme olacak mı?
Hayır. Her şey göründüğü kadar basit. Her zaman sadece satın aldığınız kontör kadar ödeme yapacaksınız. 🙂


`,
    },
    {
      id: 30,
      title: "Açık/Kapalı Faturalar Hakkında",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Bu açıklama, eczacılarımızdan gelen açık / kapalı fatura sorularına toplu bir cevap niteliği taşıyor. Öncelikle açık ve kapalı fatura ayrımının hukuki açıdan bir geçerliliği olmadığını, Türkiye'de hiçbir kanun metninde bu ayrımın gözetilmediğini vurgulamak isteriz.

Günlük ticari hayatta, kaşe faturanın üst kısmına vuruluyorsa o faturanın "açık"; alt kısmına vuruluyorsa "kapalı" olarak sınıflandırılması, ödemenin henüz alınmadığı durumlarda fatura takibini kolaylaştırabilir. Ancak faturada kaşenin nereye vurulduğunun kanunlar önünde bir hükmü yoktur. Dolayısıyla ödemenin henüz alınmadığı gerekçesiyle açık fatura kesen üyelerimizin bu tercihleri karşı tarafı bağlamaz. 

Bilgilerinize sunarız.`,
    },
    {
      id: 31,
      title: "Farmazonda etkili satış yapmanın 10 kuralı",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `1- Siparişinizin paketlemesine özen gösterin
İdeal bir Farmazon satıcısı olmanın ilk şartı ürünlerinizi korunaklı paketlemek. Her ürünü ayrı ayrı patpatlara sarın, sıvı ürünlerin paketlemesine ekstra özen gösterin ve arada hiçbir boşluk kalmayacak şekilde sağlam bir kutuya yerleştirin, hepsi bu. Ürünlerin yolda hasar görüp iade edilmemesi için bu konuya azami dikkat göstermenizi tavsiye ederiz. Alıcıların korunaklı paketleyen satıcıları tekrar tekrar tercih ettikleri bilinen bir Farmazon gerçeği. Korunaklı paketlediğiniz halde sıvı ürünleriniz hasarlı teslim edilirse Farmazon Sıvı Ürün Teminatı'ndan yararlanabilir, zararınızı telafi edebilirsiniz.

Farmazon'un özel olarak ürettirdiği ambalaj ürünlerine göz atmayı unutmayın. `,
    },
    {
      id: 32,
      title: "Farmazon Ürün Görsel Rehberi",
      tanim:
        "Farmazon'a ürün görseli göndermeden önce uymanız gereken koşulları bu sayfada bulabilirsiniz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Ürün Görseli Gönderirken Kaçınmanız Gerekenler
Sitenin görsel bütünlüğünü korumak adına, aşağıdaki gibi sorunlu görsel örnekleri değerlendirmeye alınmayacaktır.


Düşük Çözünürlüklü Görsel

Ürün ambalajı üzerindeki yazıların okunabilmesi için görselin yüksek çözünürlüklü olması büyük önem taşıyor.`,
    },
    {
      id: 33,
      title: "Haksız Fiyatlandırmalara Dair Önemli Duyuru",
      tanim:
        "Belli ürün gruplarındaki haksız fiyatlandırmayla ilgili açıklamamıza dikkatinizi çekeriz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Dünya genelinde görülen COVID-19 virüsünün oluşturduğu risk nedeniyle, ülkemizde yüksek talep alan bazı ürünlerin fiyatlarında ve işlem hacimlerinde olağandışı dalgalanmalar gözlemleniyor. 

Farmazon, gerçekleştirilen alım-satım işlemlerine taraf olmayıp, bu işlemlerin fiyatlarını denetleme konusunda yetkili değildir. Ancak haksız fiyatlandırmanın önüne geçmek için tüm gücümüzle çalıştığımızı bilmenizi isteriz. Öte yandan, kamu menfaati ve sağlığı gibi üstün yararları, Ticaret Bakanlığı’nın bu konuda sergilediği hassasiyeti ve uyguladığı yaptırımları sizlere önemle hatırlatmayı görev biliyoruz. Bu ürünlere olağan dönemlerdeki piyasa fiyatlarının üzerinde fiyatlama yapılması halinde satıcı hakkında Ticaret Bakanlığı’nın ve diğer idari kurumların denetim ve yaptırımları söz konusudur. Bu sebeple, fiyatlandırma politikanızı bu ciddiyetle belirlemeniz kritik önem taşıyor.

Siz eczacılarımızın, bu gibi olağandışı dönemlerde mesleki kuralları ve toplum menfaati ile sağlığının üstün yararını dikkate alacağınıza, bu hususta hassasiyet göstereceğinize inancımız tamdır.

Sağlıklı günler dileriz. 

`,
    },
    {
      id: 34,
      title: "Farmazondan ÜTS bildirimi",
      tanim:
        "Farmazondan ÜTS bildirimi vermek çok kolay! ÜTS bildirimlerini neden, nasıl ve nerden yapacağınızı bu sayfadan öğrenebilirsiniz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `ÜTS Bildirimi 
ÜTS nedir?
Ürün Takip Sistemi, bilinen adıyla ÜTS, ülkemizde üretilen veya ithal edilen tüm tıbbi cihazların ve kozmetik ürünlerin üretiminden tüketimine kadar geçen süreci takip eden sistemdir.

ÜTS hesabım yok, nasıl başvurabilirim?
https://utsuygulama.saglik.gov.tr/UTS/ adresindeki Başvuru bölümüne tıklayarak işlemlerinizi başlatabilirsiniz.

Hangi ürünler için ÜTS bildirimi vermek zorundayım?
İnsülin kalem iğne uçları ve şeker ölçüm striplerinde ÜTS bildirimi vermek zorunlu tutuluyor. 1 Nisan 2022'den itibaren hasta bezlerinin de bu listeye dahil edileceği yönünde bilgi verilse de, henüz resmi bir açıklama yapılmadı.

ÜTS verme bildirimi neden yapılır?
Ürünlerin lot ve seri numaraları üretim sonrasında sisteme tanımlanıyor. Bu numaralar kayıt altında oldukları için ÜTS verme bildirimi yapmak zorundasınız. 

ÜTS verme bildirimi nasıl yapılır?
ÜTS ekranına girdikten sonra soldaki menüden Ürün Hareketleri bölümüne ulaşıp, Verme / Alma Bildirimi sekmesinden bu bildirimi yapabilirsiniz.

ÜTS alma bildirimi neden yapılır?
Ürünleri kendi stoklarınıza alabilmek ve tekil takip sürecinde çıkışlarını yapabilmek için ÜTS alma bildirimi yapmak zorundasınız.

ÜTS alma bildirimi nasıl yapılır?
ÜTS ekranına girdikten sonra soldaki menüden Ürün Hareketleri bölümüne ulaşıp, Verme / Alma Bildirimi sekmesinden bu bildirimi yapabilirsiniz.

Farmazon'dan ÜTS Bildirimi 
Farmazon'dan ÜTS verme bildirimi yapabilir miyim?
Elbette! Bunun için ÜTS Token bilgisi ve ÜTS Kullanıcı ID'sine ihtiyacınız var. ÜTS token bilgisini
https://utsuygulama.saglik.gov.tr/UTS/tibbiCihaz#/sistemEntegrasyonuListele adresinden bir kez edinip, tüm verme bildirimlerinizde kullanabilirsiniz. 
Bağlantıya gittikten sonra 'Sistem Token'ı  Al' butonu yardımı ile Token'ı oluşturabilirsiniz. Kullanıcı ID'niz ÜTS sisteminde kayıtlı ÜTS firma numarasıdır.`,
    },
    {
      id: 35,
      title: "Farmazonda Sıvı Ürün Teminatı",
      tanim:
        "Farmazon Sıvı Ürün Teminatının şartlarını ve ilgili örnekleri bu dökümanda bulabilirsinz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `"Farmazon Sıvı Ürün Teminatı" nedir?

Kurallara uygun şekilde paketlenip gönderilen ürünlerin kargo sebebiyle hasara uğraması halinde, ürün bedelinin Farmazon tarafından anında karşılandığı sistemdir.

"Farmazon Sıvı Ürün Teminatı" hangi ürünler için geçerli?

Sadece sıvı ürünler için geçerlidir.

Sıvı ürünler uygun paketlemeye rağmen kırılırsa ne olur?

Farmazon, tutanak tutulmasa dahi alıcıya iadesini yapar ve satıcıya ürün bedelini öder. Eğer yeni ürün gönderilecekse, gönderim “Farmazon Öder” kargo koduyla yapılır.

Sıvı ürünler uygun paketlemeye rağmen akarsa ne olur?

Ürünler, “Farmazon Öder” kargo koduyla hiçbir kargo bedeli ödenmeden satıcıya ulaşır. Değişim durumunda aynı şekilde “Farmazon Öder” kargo koduyla değişim yapılması sağlanır.

Farmazon Sıvı Ürün Teminatı'ndan faydalanmak için ne yapmak gerekiyor?

Bu teminattan faydalanmanın tek şartı, paketlemenin aşağıda belirtildiği gibi, örneklere uygun şekilde yapılması. 

Ürünler, 

Ayrı ayrı havalı poşetlere sarıldıktan sonra buzdolabı poşeti gibi ek bir poşete daha konmalı. 

Koli içine dik yerleştirilmeli ve aradaki boşluk dolgu malzemeleriyle doldurulmalı.`,
    },
    {
      id: 36,
      title: "İlan İşlemleri",
      tanim:
        "İlanlarınızı doğru yönetebilmek için ipuçlarını burada bulabilirsiniz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Nasıl ilan ekleyebilirim?
Sayfanın üst tarafında yer alan Ücretsiz İlan Ver butonuna tıkladığınızda ilan ekleme sayfasına yönlendirileceksiniz. Satmak istediğiniz ürünün adını kolaylıkla buraya yazabilirsiniz, ürün fotoğrafı otomatik olarak karşınıza çıkacaktır. Miat, stok ve fiyat bilgilerini girdikten sonra ilanı yayına alabilirsiniz.

Ürünle ilgili eklemek istediğiniz notları Açıklama bölümüne yazabilir, "Öne çıkarılan ilanlarıma ekle" seçeneğiyle kendi ilanlarınız arasında öne çıkartabilirsiniz.

Satmak istediğim ürün veri tabanında yok, nasıl ekleyebilirim?
Satmak istediğiniz ürünün adını yazdığınızda size herhangi bir ürün önerilmiyor ise bu ürünün veri tabanımızda bulunmadığı anlamına gelmektedir. Bu durumda eklemek istediğiniz ürünün tam adını ve hacmini belirttikten sonra İlan Ekle butonuna tıklayabilirsiniz.

Bu şekilde üyelerimiz tarafından eklenen yeni ürünler öncelikle ekibimizin kontrolünden geçer ve Farmazon kurallarına uygun olanlar yayına alınır.

Nasıl ürün fotoğrafı ekleyebilirim?
Ürün fotoğraflarını canlı destek bölümüne veya merhaba@farmazon.com.tr adresine gönderebilirsiniz. Fotoğraflar ekibimiz tarafından düzenlendikten sonra en geç bir hafta içinde eklenecektir.

Satacağım ürünün fiyatını nasıl belirleyebilirim?
Ürün fiyatlarını belirlerken; KDV'yi, Farmazon hizmet bedelini ve kendi kârınızı göz önünde bulundurmalısınız.

Ürün listelerken nelere dikkat etmem gerekir? 
Farmazon'da yer alan ürün bilgileri ile eklenen ilanın tutarlı olmasından satıcı sorumludur. Farmazon ilan içeriği, miat, fiyat, vb. durumlardan sorumlu değildir.

İlanlarımı nasıl silebilirim?
İlanlarım sayfanızdan ilanlarınızı teker teker veya toplu olarak yayından kaldırabilirsiniz.

Hangi ürünleri satabilirim? 
Eczanelerde satılan tüm ilaç dışı ürünlerin satışı serbest olmakla birlikte, reçete ile satılan her tür ilacın satışı yasaktır. Detaylı listesi "Yasaklı Ürünler" sayfasında bulabilirsiniz. Yasaklı bir ürünün satışı halinde ilan derhal silinecek ve ilan sahibi uyarılacaktır. İhlalin tekrarı halinde Farmazon ilan sahibinin üyeliğini sonlandırma hakkını saklı tutar. 

`,
    },
    {
      id: 37,
      title: "Farmazonda Nasıl Satış Yapabilirim?",
      tanim:
        "Ek gelir elde etmek ve karlılığınız arttırmak için ipuçlarını ve satıcı kurallarını burada bulabilirsiniz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Nasıl satış yapabilirim? 
Farmazon'da satış yapmak için herhangi bir ücret ödenmez, üyelerimiz ilan listeledikten sonra hemen satış yapmaya başlayabilir. Alıcı eczacılarımız ürünleri kredi kartıyla satın alır ve kargoyla teslimat sonrasında verdikleri onayla birlikte, ücret satıcının hesabına aktarılır. Tüm siparişler için fatura zorunludur. Satıcılarımız, Üyelik Sözleşmesi’nde de belirtildiği üzere, listeledikleri ürünün niteliğinden sorumludur.

Hangi ürünleri satabilirim? 
Eczanelerde satılan tüm ilaç dışı ürünlerin satışı serbest olmakla birlikte, reçete ile satılan her tür ilacın satışı yasaktır. Detaylı listesi "Yasaklı Ürünler" sayfasında bulabilirsiniz. Yasaklı bir ürünün satışı halinde ilan derhal silinecek ve ilan sahibi uyarılacaktır. İhlalin tekrarı halinde, Farmazon ilan sahibinin üyeliğini sonlandırma hakkını saklı tutar. 

Mevzuatta, internet sitemizde veya taşıma işini yapacak olan kargo şirketinin belirleyebileceği “taşınması yasak olan ürünler” listesinde yer alan ürünlerin üyemiz tarafından satılıp gönderilmesi halinde, bundan doğabilecek her türlü sözleşmesel, hukuki ve cezai sorumluluk için Üye’ye rücu etme hakkımız mevcuttur.

Ürün listelerken nelere dikkat etmem gerekir? 
Farmazon'da yer alan ürün bilgileri ile eklenen ilanın tutarlı olmasından satıcı sorumludur. Farmazon ilan içeriği, miat, fiyat, vb. hiçbir durumdan sorumlu değildir. 

Hasarlı kargoların iadesinin satıcı tarafından kabul edilmemesi halinde resmi mercilerce tahakkuk ettirilecek idari para cezaları, sözleşmesel, hukuki ve cezai sorumluluk için Üye’ye rücu etme hakkımız mevcuttur.

Farmazon ödemelerden komisyon alıyor mu? 
Evet. Güvenli ödeme hizmeti sağlayan aracı şirketin maliyetleri, ilgili vergiler ve Farmazon'un varlığını devam ettirebilmesi için alması minimum oranda komisyon almaktadır.  

Farmazon'da gelen ödemelerim güvende mi? 
Kesinlikle. Tüm ödemeleriniz Farmazon ödeme sisteminin %100 güvencesi altında gerçekleşir. Farmazon Güvenli Ödeme Sistemi ile ilgili detaylı bilgiye buradan ulaşabilirsiniz. 

Ödemeler ne zaman hesabıma aktarılır? 
Ödeme tutarı, alıcı eczacımızın ürünlerin eline güvenli bir şekilde ulaştığını onayladığı ve teslim sürecine bir itirazı olmadığı takdirde, en erken ödeme tarihinden tam 7 gün sonra olmak koşulu ile kargoya veriliş tarihinden 5 iş günü sonra hesabınıza otomatik olarak aktarılır. 

Alıcı eczacımız, olası bir gecikme sebebiyle kargoyu bir haftadan uzun bir sürede teslim aldığını belirtirse, ödeme tutarı satıcıya bu onaydan bir gün sonra aktarılır. 

Sattıklarım sayfası üzerinden tamamlanan siparişlerinizi görebilir, Hesap Hareketleri bölümünden ve Farmazon’dan gönderilen e-postalarla ödemelerin hesabınıza ne zaman aktarıldığını takip edebilirsiniz.

Fatura kesmek zorunda mıyım?
Evet. Farmazon'da tüm satışlar için fatura kesmek ve siparişle birlikte göndermek zorunludur. E-fatura mükellefi olsanız dahi, faturanın çıktısını sipariş paketine eklemeyi unutmayın. Fatura ihmallerinin profilinize olumsuz yansıdığını ve satış yetkilerinizi kaybetmenize kadar varan yaptırımlara sebep olduğunu hatırlatırız. Her ne kadar yasal olarak açık/kapalı fatura diye bir uygulama bulunmasa da piyasada kabul görmüş uygulama gereğince faturaları kapalı, yani kaşeyi alt kısma basarak gönderebilirsiniz.

Siparişimdeki ürün, stokumda kalmamış. Ne yapmalıyım? 
Gelen siparişteki ürünlerin tamamını gönderemeyecekseniz, ilgili ürünün adedini düşürerek siparişi güncelleyebilirsiniz. Bu durumda güncellenen sipariş yeniden alıcı eczacımızın onayına gönderilecektir. Alıcı eczacımız güncellenen siparişi onayladığı takdirde ürünleri kargoya verebilirsiniz.

Eğer elinizde hiç stok kalmadıysa siparişi iptal edebilirsiniz. Bu durumda Farmazon Puanı'nızın olumsuz bir şekilde etkileneceğini unutmayın.

Alıcı eczacı eksik ürün teslim aldığını söylüyor, ama ürünleri eksiksiz gönderdiğime eminim. Ne yapmalıyım?
Alıcı eczacımız eksik ürün teslim aldığını Farmazon'a iletirse, ilk olarak satıcıdan ürünleri paketlerken tuttuğu kamera kaydı istenir. Eğer kamera kaydı yoksa, satıcı eksik ürün gönderdiğini ve sorunu en kısa zamanda çözeceğini kabul etmiş sayılır. Alıcı eczacımız, eğer isterse, süreci netleştirmek için kendi kaydını paylaşabilir. Farmazon, eksik ürün alıcı eczacımıza ulaştırılana kadar para aktarımınızı onaylamaz / durdurur.

Nasıl daha fazla satış yapabilirim?

İlanlarınızda çeşitliliği artırın; alıcı eczacılarımız genellikle çeşitli ürünleri birlikte satın almak istiyorlar.

Kategori sayfalarından çok satan ürünlere göz atabilirsiniz.

İlanlarınıza fotoğraf eklemeye özen gösterin; fotoğrafı bulunmayan ilanların daha az satıldığını birçok kez gözlemleme fırsatımız oldu.

Ücretsiz kargo kampanyası belirleyin; bu tutar ne kadar düşük olursa alım yapan eczacılarımız için o kadar ilgi çekici oluyor.

Listenizde bulunan ilanlardan en azından birinde en uygun fiyatı yakalamayı hedefleyin.

`,
    },
    {
      id: 38,
      title: "Satışı Yasaklı Ürünler",
      tanim:
        "Farmazonda Satışı Yasaklı ürünlerle ilgili gerekli açıklamayı burada bulabilirsiniz.",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Aşağıda yer alan ürünlerin satışı yasaktır:

Eczaneler ve Eczacılar Hakkında Yönetmelik’in 42. Maddesi uyarınca münhasıran eczanelerde satılacağı düzenlenen:

Reçeteye tabi olan ve olmayan tüm beşeri ilaçlar

Kurumda ruhsatlı geleneksel bitkisel tıbbi ürünler

Kurumun iznine tabi olan homeopatik tıbbi ürünler

Enteral beslenme ürünleri dahil özel tıbbi amaçlı diyet gıdalar ve özel tıbbi amaçlı bebek mamaları

2. Reçeteli veya reçetesiz ilaç yapımında kullanılan malzemeler

3. Doktor reçetesi ile alınabilen numaralı gözlük camı ve çerçevesi, reçeteli lens satışı

4. Veteriner tıbbi ürünler

5. İşitme cihazları, ortopedik protez ve ortezleri

6. İlgili mevzuat uyarınca internet üzerinden satışı ve/veya takası yasaklanan ürünler

Yasaklı bir ürüne ilişkin ilan verilmesi veya Yasaklı ürün satışı halinde ilan derhal silinecek ve ilan sahibi uyarılacaktır. İhlalin tekrarı halinde Farmazon ilan sahibinin üyeliğini sonlandırma hakkını saklı tutar.

Elektronik Ticaretin Düzenlenmesi Hakkında Kanun’un 9/1. Maddesi uyarınca Farmazon, Yasaklı ürün satışından sorumlu değildir. 

Aracı hizmet sağlayıcıların yükümlülükleri 

MADDE 9 – (1) Aracı hizmet sağlayıcılar, hizmet sundukları elektronik ortamı kullanan gerçek ve tüzel kişiler tarafından sağlanan içerikleri kontrol etmek, bu içerik ve içeriğe konu mal veya hizmetle ilgili hukuka aykırı bir faaliyetin ya da durumun söz konusu olup olmadığını araştırmakla yükümlü değildir.
`,
    },
    {
      id: 39,
      title: "Farmazon Puan Hesabı",
      tanim:
        "Satıcı puanlarının nasıl hesaplandığını bu belgede bulabilirsiniz",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Farmazon'da satış yapan üyelerimizin puanları, alıcıların yaşayacağı deneyimi iyileştirmek adına tamamen nesnel olarak ve göstergeler üzerinden hesaplanır. Son 30 günde alınan siparişlerden aşağıda detaylandırılan ceza puanları çıkartılır, toplam sipariş üzerinden bir oran hesaplanır ve ortaya 10 üzerinden değerlendirilen Farmazon Puanı çıkar:

Farmazon Puanı = ( Alınan Sipariş - Ceza Puanları ) x 10 / Alınan Sipariş

Hangi durumlarda puanınız kırılır? 

Siparişi onayladıktan sonra onay geri alma talebi ile işlem yapıldığında (1 Puan) 

Adet güncellediğinizde (0,5 Puan)

Siparişiniz alıcıya hasarlı olarak ulaştığında (0,5 Puan)

Siparişiniz alıcıya farklı veya eksik ürünle ulaştığında (1 Puan)

Siparişiniz alıcıya miadı yanlış ürünle ulaştığında (1 Puan)

Siparişiniz alıcıya standart dışı (ÜTS bildirimi yapılmamış ürünler bu kapsama girer) ürünle ulaştığında (1 Puan) 

Kargo çıktılarının veya siparişlerin karışması nedeniyle alıcıya bir başka alıcının paketini gönderdiğinizde (1 Puan)

Siparişinizle birlikte fatura veya e-fatura göndermediğinizde (1 Puan)

Hatalı fatura gönderdiğinizde (1 Puan)

Siparişi iptal ettiğinizde (2 Puan)

Önemli notlar

Yukarıda işlemlerin biri diğerini geçersiz kılmaz. Çeşitli sebeplerle sipariş onayınızı geri aldıktan sonra siparişinizi iptal ederseniz, kullanıcı deneyimi üst üste olumsuz olarak etkilendiği için iki defa puan kaybedersiniz. Örneğin, onayladığınız siparişi iptal etmek istediğinizi farz edelim. Önce zorunlu olarak onay geri alma işlemi uygulanır (1 puan), daha sonra siparişiniz iptal olur (2 puan). Sonunda bu işlem size toplam 3 puan kaybettirir. 

Aynı sipariş için birden fazla türde ceza puanı kırılabilir. Örneğin hem hasarlı (0,5 puan) hem eksik ürün (1 puan) gönderildiyse toplam 1,5 ceza puanı kırılır. 

Ceza puanları, satış yapan üyelerimizin yukarıda belirtilen hataları sonucu hesaplarına tanımlanır. Alıcı eczacılarımız veya Müşteri Hizmetleri ekibimiz bireysel olarak puanlara müdahale edemez. 

Son 30 günde 10 ya da daha az sipariş alan bir satıcının puanı hesaplanmaz, "Puansız" olarak belirtilir. Puansız kullanıcılar, ilan sayfasında "—" ile gösterilir.

Aşağıda listelenen sorunlu ürün çeşitlerinin tümü standart dışı ürün kategorisine dahildir. İlan açıklamasına yazılan notların sipariş aşamasında hiçbir geçerliliği yoktur. Bu ürünleri teslim alan alıcı eczacıların koşulsuz iade hakkı vardır. 

Orijinal olmayan ürün

Bozuk ürün

Bandrolsüz ürün

ÜTS bildirimi yapılmadan gönderilen ürün

Jelatini / etiketi sökülmüş ürün

Kalitesi sorunlu ürün

İlan kartında belirtilmeden kofreden ayrılmış ürün

Örnek:  

Son 30 günde 100 sipariş alan bir satıcı, 

2 miadı yanlış ürün içeren gönderim (2 x 1 = 2 ceza puanı)

3 hasarlı ürün içeren gönderim (3 x 0,5 = 1,5 ceza puanı)

1 adet değişikliği (0,5 ceza puanı)

4 yanlış adrese gönderim (4 x 1 = 4 ceza puanı),

yaptığında, toplam 8 ceza puanı alır.

Farmazon Puanı ise  ( 100 - 8 ) x 10 / 100 = 9.2 Puan olarak hesaplanır. 

Farmazon puan dağılımı aşağıdaki gibidir. Puan sistemiyle ilgili daha detaylı bilgi almak isterseniz bu sayfaya göz atabilirsiniz.

`,
    },
    {
      id: 40,
      title: "Banner Kriterleri",
      yazarlar: "Selin Gürel",
      avatars: ["https://joeschmoe.io/api/v1/random"],
      tarih: "Bir haftadan daha uzun süre önce güncellendi",
      makale: `Farmazon’un ana sayfasındaki banner (kaydırmalı reklam) alanı, kullanıcılarımızın ürünlerini belirli bir süre için öne çıkarmalarını sağlamak ve bu yolla satışlarını artırmak için tasarlandı. Bütün kullanıcılarımıza açık olan bu alandan ücretsiz olarak faydalanabilirsiniz.

Kullanıcılarımızdan gelen banner taleplerini değerlendirirken, göz önünde bulundurduğumuz bazı kriterler var:

Ürünün satış potansiyeli: Ürünün son dönemdeki satış performansı ve satış potansiyeli reklam alanına çıkması için yeterli olmalıdır. Ürününüz bu potansiyele sahip değilse ancak aşağıdaki kriterleri sağlıyorsanız, talebiniz ana sayfadaki diğer alanlarda değerlendirilecektir.

Kullanıcı puanı: Banner alanından kullanıcı puanı minimum 9 olan üyelerimiz faydalanabilir. Puanı oluşmamış kullanıcılarımız tüm siparişlere ücretsiz kargo kampanyası düzenledikleri takdirde bu şartı sağlamış sayılır.

Ücretsiz kargo kampanyaları: 350 TL, 500 TL, 700 TL, 1000 TL üstü veya tüm siparişlere ücretsiz kargo kampanyası düzenleyen üyelerimiz banner alanından faydalanabilir.

Ürünün uygun fiyatlı olması

Ürünün yüksek stoklu olması

Ürünün uzun miatlı olması

Ürünün geçmişteki satış grafiği: Ürünün geçmişteki satış-fiyat dengesi analiz edilerek, ideal bir satış bir fiyatına ulaşılır. Banner alanına taşınan ürün, bu fiyatın üzerinde olmamalıdır.

Ürün ilanında maksimum satış adedi tanımlanmaması 

Kullanıcının ürün çeşitliliği

Kullanıcının gönderim süresi

Bu kriterlere uymayan talepleri ne yazık ki olumsuz değerlendirmek zorundayız.

Ana sayfaya taşınan ürünlerde fiyat güncellemesi veya kargo kampanyası değişikliği yapıldığı takdirde, ilgili banner otomatik olarak yayından kalkacaktır. Ayrıca bir kullanıcının haftada en fazla bir kez reklam talebinde bulunabileceğini, tek ilanda sadece tek markanın tanıtımını yapabileceğini, aynı anda birden fazla ilanının yayında olamayacağını ve ürünlerin satış oranına bağlı olarak ortalama 2-3 gün süreyle ana sayfada yer alabileceğini hatırlatmak isteriz.

Anlayışınız için teşekkürler.

`,
    },
  ];
  const [myObject, setMyObject] = useState([]);
  useEffect(() => {
    let obj = data.find((x) => x.id == id);
    setMyObject(obj);
  }, []);
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
            <a href="http://localhost:3000/collections/1">{myObject.title}</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{myObject.title}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="General-article">
          <div className="article">
            <div className="Farmazon-article">{myObject.title}</div>
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
            <div
              dangerouslySetInnerHTML={{
                __html: myObject.makale,
              }}
              className="Makalesi"
            ></div>
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
