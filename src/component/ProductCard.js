import Image from "next/image"

export default function ProductCard({product}){
  return (
    <>
    <div className="ProductSection-ProductCard-1 basis-xs">
      <div className="ProductSection-ProductCard-pic">
        <Image src="/product/jogger_product.png" alt="sixPhoto" width={280} height={338}/>
      </div>
      <div className="ProductSection-ProductCard-title font-mono mt-2 mb-2">Jogger with modal</div>
      <div className="ProductSection-ProductCard-price flex mt-2 font-mono mb-2">
        <div className="ProductSection-ProductCard-price-text mr-3">NTD</div>
        <div className="ProductSection-ProductCard-price-num">790</div>
      </div>
      <div className="ProductSection-ProductCard-color"></div>
    </div>
     <div className="ProductSection-ProductCard-1 basis-xs">
      <div className="ProductSection-ProductCard-pic">
        <Image src="/product/flare_product.png" alt="sixPhoto" width={280} height={338}/>
      </div>
      <div className="ProductSection-ProductCard-title font-mono mt-2 mb-2">Jogger with Flare</div>
      <div className="ProductSection-ProductCard-price flex mt-2 font-mono mb-2">
        <div className="ProductSection-ProductCard-price-text mr-3">NTD</div>
        <div className="ProductSection-ProductCard-price-num">790</div>
      </div>
      <div className="ProductSection-ProductCard-color rounded-(45px) bg-blue-500 w-[5px]"></div>
    </div>
     <div className="ProductSection-ProductCard-1 basis-xs">
      <div className="ProductSection-ProductCard-pic">
        <Image src="/product/classic_product.png" alt="sixPhoto" width={280} height={338}/>
      </div>
      <div className="ProductSection-ProductCard-title font-mono mt-2 mb-2">Jogger with Clasic</div>
      <div className="ProductSection-ProductCard-price flex mt-2 font-mono mb-2">
        <div className="ProductSection-ProductCard-price-text mr-3">NTD</div>
        <div className="ProductSection-ProductCard-price-num">790</div>
      </div>
      <div className="ProductSection-ProductCard-color"></div>
    </div>
     <div className="ProductSection-ProductCard-1 basis-xs">
      <div className="ProductSection-ProductCard-pic">
        <Image src="/product/relaxed_product.png" alt="sixPhoto" width={280} height={338}/>
      </div>
      <div className="ProductSection-ProductCard-title font-mono mt-2 mb-2">Jogger with Relaxed</div>
      <div className="ProductSection-ProductCard-price flex mt-2 font-mono mb-2">
        <div className="ProductSection-ProductCard-price-text mr-3">NTD</div>
        <div className="ProductSection-ProductCard-price-num">790</div>
      </div>
      <div className="ProductSection-ProductCard-color"></div>
    </div>
     <div className="ProductSection-ProductCard-1 basis-xs">
      <div className="ProductSection-ProductCard-pic">
        <Image src="/product/straightleg_product.png" alt="sixPhoto" width={280} height={338}/>
      </div>
      <div className="ProductSection-ProductCard-title font-mono mt-2 mb-2">Stright leg trouser</div>
      <div className="ProductSection-ProductCard-price flex mt-2 font-mono mb-2">
        <div className="ProductSection-ProductCard-price-text mr-3">NTD</div>
        <div className="ProductSection-ProductCard-price-num">790</div>
      </div>
      <div className="ProductSection-ProductCard-color"></div>
    </div>
     <div className="ProductSection-ProductCard-1 basis-xs">
      <div className="ProductSection-ProductCard-pic">
        <Image src="/product/wideleg_product.png" alt="sixPhoto" width={280} height={338}/>
      </div>
      <div className="ProductSection-ProductCard-title font-mono mt-2 mb-2">wide leg trouser</div>
      <div className="ProductSection-ProductCard-price flex mt-2 font-mono mb-2">
        <div className="ProductSection-ProductCard-price-text mr-3">NTD</div>
        <div className="ProductSection-ProductCard-price-num">790</div>
      </div>
      <div className="ProductSection-ProductCard-color"></div>
    </div>
    </>
  )
}