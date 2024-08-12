const xmlString = `
<product>
      <product_id>25700</product_id>
      <name>Rustykalny stół dębowy z dokładkami Amore</name>
      <quantity>82</quantity>
      <ean>59042342251071</ean>
      <sku>ZHHSF40</sku>
      <category_name>Stoły</category_name>
      <manufacturer_name>Meble111</manufacturer_name>
      <price>2999</price>
      <tax_rate>23%</tax_rate>
      <weight>97</weight>
      <width>90</width>
      <height>78</height>
      <length>180</length>
      <description>
      <![CDATA[ &lt;ul&gt;&lt;li&gt;Stół wykonany w 100% z litego drewna dębowego&lt;/li&gt;&lt;li&gt;Możliwość dołożenia 2 dokładek o długości 50 cm każda, pozwalających przedłużyć stół o dodatkowy 1 metr&lt;/li&gt;&lt;li&gt;Lekko zaokrąglone brzegi stołu&lt;/li&gt;&lt;li&gt;Konstrukcja zapewniająca niezrównaną stabilność i trwałość&lt;/li&gt;&lt;li&gt;Produkowany w Polsce&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt; ]]>
      </description>
      <attributes>
            <attribute>
                  <attribute_name>Materiał</attribute_name>
                  <attribute_value>drewno</attribute_value>
            </attribute>
            <attribute>
                  <attribute_name>Kolor mebla</attribute_name>
                  <attribute_value>dąb naturalny</attribute_value>
            </attribute>
            <attribute>
                  <attribute_name>Kolor blatu</attribute_name>
                  <attribute_value>dąb naturalny</attribute_value>
            </attribute>
            <attribute>
                  <attribute_name>Materiał blatu</attribute_name>
                  <attribute_value>drewno</attribute_value>
            </attribute>
            <attribute>
                  <attribute_name>Mebel</attribute_name>
                  <attribute_value>Stół</attribute_value>
            </attribute>
            <attribute>
                  <attribute_name>Szerokość</attribute_name>
                  <attribute_value>180 cm</attribute_value>
            </attribute>
            <attribute>
                  <attribute_name>Wysokość</attribute_name>
                  <attribute_value>78 cm</attribute_value>
            </attribute>
            <attribute>
                  <attribute_name>Montaż</attribute_name>
                  <attribute_value>proste i łatwe do samodzielnego montażu</attribute_value>
            </attribute>
            <attribute>
                  <attribute_name>Grubość blatu</attribute_name>
                  <attribute_value>3 cm</attribute_value>
            </attribute>
            <attribute>
                  <attribute_name>Grubość nogi</attribute_name>
                  <attribute_value>14 cm</attribute_value>
            </attribute>
            <attribute>
                  <attribute_name>Funkcje</attribute_name>
                  <attribute_value>rozkładanie</attribute_value>
            </attribute>
            <attribute>
                  <attribute_name>Rozkładanie</attribute_name>
                  <attribute_value>możliwość rozłożenia stołu o 1 metr</attribute_value>
            </attribute>
      </attributes>
</product>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'application/xml');

const priceElement = xmlDoc.getElementsByTagName('price')[0];
const price = priceElement.textContent;

const priceContainer = document.getElementById('price');
priceContainer.textContent = `${Number(price).toFixed(2)} zł`;


const widthElement = xmlDoc.getElementsByTagName('width')[0];
const width = widthElement.textContent;
const dimension = document.getElementById('dimension');

const lengthElement = xmlDoc.getElementsByTagName('length')[0];
const length = lengthElement.textContent;

const heightElement = xmlDoc.getElementsByTagName('height')[0];
const height = heightElement.textContent;

dimension.innerHTML = `<i class="fa-solid fa-maximize color-icon"></i> Szer.(cm): <b>${length}</b> | Wys.(cm) <b>${height}</b>`;

const eanElement = xmlDoc.getElementsByTagName('ean')[0];
const ean = eanElement.textContent;
const code = document.getElementById('code');
code.textContent = ean;


const quantityElement = xmlDoc.getElementsByTagName('quantity')[0];
const quantity = quantityElement.textContent;
const quantityProduct = document.querySelector('#quantity');
quantityProduct.innerHTML = `Zostało <b>${quantity}</b> sztuk w magazynie`;


const taxElement = xmlDoc.getElementsByTagName('tax_rate')[0];
const tax = document.getElementById('tax');
tax.textContent = `zawiera ${taxElement.textContent} VAT`;

const descriptionElement = xmlDoc.getElementsByTagName('description')[0];
let description = descriptionElement.textContent;

description = description.replace(/&lt;/g, '<')
                         .replace(/&gt;/g, '>')
                         .replace(/&amp;/g, '&');

const ul = document.getElementById('ul');
ul.innerHTML = description;

const specification = document.getElementById('specification');
const attributes = xmlDoc.getElementsByTagName('attribute');
for(let i = 0; i < attributes.length; i++) {
      const arrtibuteName = attributes[i].getElementsByTagName('attribute_name')[0].textContent;
      const attributeValue = attributes[i].getElementsByTagName('attribute_value')[0].textContent;

      console.log(`${arrtibuteName}: ${attributeValue}`);

      const liElement = document.createElement('li');
      liElement.textContent = `${arrtibuteName}: ${attributeValue}`;

      specification.append(liElement);

}
