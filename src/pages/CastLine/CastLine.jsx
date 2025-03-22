import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import "../CastLine/CastLine.css"

const CastLine = () => {
    const [activeTab, setActiveTab] = useState('Product');
    
        // Tab-specific content
        const tabContent = {
          'Product': {
            image: require("../CastLine/Assets/tab.jpg"),
            description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
            tableHeaders: ['Technical Specifications','JP-COEX-CF 1800 (3 Layer)','JP-COEX-CF 2300 (3 Layer)','JP-COEX-CF 2300 (3 Layer)','JP-COEX-CF 2300 (5 Layer)'],
            tableRows: [
              ['Screw Dia (mm)' ,'70 | 100 | 70','80 | 100 | 70','80 | 120 | 70','80 | 120 | 100 | 80 '],
              ['Die Size (mm)','1800','2300','2300','2300'],
              ['Finished film width (mm)', '1500','2000','2000','2000'],
              ['Output (Kgs/Hr.)', '285 to 400','380 to 500','600 to 650','900 to 1000'],
            ],
            slideshowImages: [require("../CastLine/Assets/app.jpg"),require("../CastLine/Assets/app1.jpg")],
            applicationPoints: ['Stretch Films: Wrapping palletized goods.',
'Cling Films: Food packaging for freshness.',
'Barrier Films: Protection from moisture and gases.',
'Masking Films: Shielding during painting.'],
            catalogue: '/path-to-tab1-catalogue.pdf',
          }
        };
        const currentContent = tabContent[activeTab];
    return(
<div>

<div className="imageContainer1">
        <img
          className="ExportSection"
          alt="ExportSection"
          src={require('./Assets/bannermain.jpg')}
        />
        <div >
        <div className="product-layoutFila">
      <div className="image-sectionFila">
        <img 
          src={require('./Assets/leftbanner.jpg')} 
          alt="Jaiko Industries Machine" 
          className="product-imageFila"
        />
      </div>
      
      <div className="content-sectionFila">
        <div className="descriptionFila">
          <p>
          JPEL’s Chill Roll Cast Film Lines are designed to produce high-quality multi-ply films that have become indispensable in the packaging industry. These lines provide versatile solutions for manufacturing a wide range of films used in various packaging applications, including stretch films, cling films, barrier films, masking films, CPP films, and blister films. With capabilities for film thicknesses ranging from 15 to 150 microns, our technology ensures top-notch quality and cost-efficient production.
          </p>
        </div>
      </div>
    </div>


        </div>
      </div>
           {/* First Image and Title */}
      <div className="imageContainer1">
        <img
          className="ExportSection"
          alt="ExportSection"
          src={require('./Assets/banner2.jpg')}
        />
      </div>
 <Navigation
          tabs={Object.keys(tabContent)}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
          <ProductWithDownloadCatalogue 
         image={currentContent.image}
        description={currentContent.description}
        tabId={activeTab}
        tabContent={tabContent}
      />
        <SpecsTable
          headers={currentContent.tableHeaders}
          rows={currentContent.tableRows}
        />
         <p className="description2">*depending on machine models and specifications</p>

        <Applications
          title={`Applications for ${activeTab}`}
          images={currentContent.slideshowImages}
          points={currentContent.applicationPoints}
        />

</div>
    )
}
export default CastLine;