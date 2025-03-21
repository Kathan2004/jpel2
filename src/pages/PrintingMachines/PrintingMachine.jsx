import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import '../PrintingMachines/PrintingMachine.css'

const PrintingMachine = () => {
    const [activeTab, setActiveTab] = useState('Product');
    
        // Tab-specific content
        const tabContent = {
          'Product': {
            image: require("../PrintingMachines/Assets/4.jpg"),
            description: '',
            tableHeaders: ['Technical Specifications'],
            tableRows: [
              ['Working width - Double Flat', '20 to 80 cm*'],
              ['Weft insertion rate', 'upto 720ppm*'],
            ],
            slideshowImages: [require("../PrintingMachines/Assets/13.jpg"), require("../PrintingMachines/Assets/14.jpg")],
            applicationPoints: ['Cement Bags: Printing logos, product details, and branding on woven polypropylene cement sacks.' ,
    'Fertilizer Bags: Custom designs and instructions printed on woven sacks for fertilizers.',
    'Grain Bags: Printing product names and storage instructions on woven sacks for grains'],
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
        <div className="product-layout">
      <div className="image-section">
        <img 
          src={require('./Assets/leftbanner.jpg')} 
          alt="Jaiko Industries Machine" 
          className="product-imagePM"
        />
      </div>
      
      <div className="content-section">
        <div className="description">
          <p>
          High speed, PLC base 4/6/8 color flexo printing machine for Woven Sack having inline Corona Treatment, micro perforation, twist gusseting, cutting/winding system, for HDPE / PP laminated and un-laminated woven fabrics.

            <br></br>
            <br></br>
            Specially designed Micrometric adjustment system provided at each Printing Station to have fine pressure from Anilox Roll to Printing Drum and from Printing Drum to the final product (Fabric). This will improve the better sharpness of Printing.

          
            <br></br>
            <br></br>
            Individual Gearbox system consists of hardened and ground oil dipped gears with the inbuilt planetary arrangement at each printing station. This increases the sturdiness of the machine which reduces maintenance and downtime.
            <br></br>
            <br></br>
            Easy changeover for a change of direction of printing with the help of same gearbox system is also incorporated
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
          src={require('./Assets/banner.jpg')}
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
        <Applications
          title={`Applications for ${activeTab}`}
          images={currentContent.slideshowImages}
          points={currentContent.applicationPoints}
        />

</div>
    )
}
export default PrintingMachine;