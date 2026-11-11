import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, MapPin, Search, SlidersHorizontal, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./VendorCategories.css";

const vendors = [
 {name:"The Crystal",category:"Wedding Venues",city:"Delhi NCR",price:"₹2,00,000 onwards",rating:"5.0",reviews:28,image:"/Golden-Hour Garden Wedding Ceremony.png",featured:true},
 {name:"Royal Orchid Banquets",category:"Wedding Venues",city:"Pune",price:"₹1,50,000 onwards",rating:"4.9",reviews:64,image:"/Lavish Red and Gold Wedding Stage.png"},
 {name:"Golden Moments Studio",category:"Photography",city:"Mumbai",price:"₹45,000 onwards",rating:"4.8",reviews:42,image:"/Golden Meadow Wedding Photoshoot.png"},
 {name:"Petals & Vows Decor",category:"Decorators",city:"Nashik",price:"₹75,000 onwards",rating:"4.9",reviews:31,image:"/Golden Mandap Wedding Ceremony.png"},
 {name:"Rhythm House Events",category:"Music & DJs",city:"Pune",price:"₹25,000 onwards",rating:"4.7",reviews:19,image:"/Glittering Indian Wedding Dance Stage.png"},
 {name:"The Feast Company",category:"Caterers",city:"Delhi NCR",price:"₹1,200 per plate",rating:"4.8",reviews:53,image:"/Golden Wedding Buffet Under Crystal Lights.png"}
];
const categories=["All Vendors","Wedding Venues","Photography","Decorators","Music & DJs","Caterers"];
export default function VendorCategories(){
 const [category,setCategory]=useState("All Vendors"),[query,setQuery]=useState("");
 const visible=useMemo(()=>vendors.filter(v=>(category==="All Vendors"||v.category===category)&&`${v.name} ${v.city} ${v.category}`.toLowerCase().includes(query.toLowerCase())),[category,query]);
 return <div className="vc-page"><Navbar/><main className="vc-wrap">
  <div className="vc-hero"><div><span>DISCOVER AMAZING PROFESSIONALS</span><h1>Find the perfect vendors<br/><em>for every celebration.</em></h1><p>Explore trusted event professionals, compare services and connect with the right team for your special day.</p></div><div className="vc-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search vendors, categories or cities"/><button onClick={()=>setQuery(query.trim())}>Search</button></div></div>
  <div className="vc-breadcrumb"><Link to="/">Home</Link><span>›</span> Vendor Category</div>
  <div className="vc-heading"><div><span>EXPLORE OUR NETWORK</span><h2>Popular vendor categories</h2></div><p>Find the people who bring your ideas to life.</p></div>
  <div className="vc-categories">{categories.slice(1).map((c,i)=><button key={c} onClick={()=>setCategory(c)} className={category===c?"active":""}><span>{["⌂","✧","❀","♫","♨"][i]}</span>{c}</button>)}</div>
  <div className="vc-list-head"><div><h2>{category==="All Vendors"?"Featured vendors":category}</h2><p>{visible.length} professionals to explore</p></div><div className="vc-filter"><SlidersHorizontal size={16}/><span>Curated vendors</span></div></div>
  {visible.length?<div className="vc-grid">{visible.map((v,i)=><article className="vc-card" key={v.name}><Link to="/vendor-profile" className="vc-card-image"><img src={v.image} alt={v.name}/>{v.featured&&<span className="vc-featured">HAREVENT FEATURED</span>}<button type="button" aria-label="Vendor rating"><Star size={13} fill="currentColor"/> {v.rating}</button></Link><div className="vc-card-content"><span className="vc-card-category">{v.category}</span><h3><Link to="/vendor-profile">{v.name}</Link>{i===0&&<BadgeCheck size={16}/>}</h3><p><MapPin size={14}/>{v.city}</p><div className="vc-card-bottom"><div><small>STARTING PRICE</small><b>{v.price}</b><small>{v.reviews} customer reviews</small></div><Link to="/vendor-profile">View Profile <ArrowRight size={15}/></Link></div></div></article>)}</div>:<div className="vc-empty"><h3>No vendors found</h3><p>Try another search or choose a different category.</p><button onClick={()=>{setQuery("");setCategory("All Vendors")}}>Clear filters</button></div>}
  <div className="vc-bottom-cta"><div><span>YOUR EVENT DESERVES THE BEST</span><h2>Not sure where to start?</h2><p>Tell us what you're planning and we'll help you find the right professionals.</p></div><Link to="/enquiry">Get vendor recommendations <ArrowRight size={16}/></Link></div>
 </main><Footer/></div>;
}
