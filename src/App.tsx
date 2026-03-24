/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TreePine, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  User, 
  MessageSquare,
  Leaf,
  Heart,
  Briefcase,
  ChevronRight
} from 'lucide-react';

type SectionType = 'consultant' | 'lifestyle' | 'partner';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('consultant');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = {
    consultant: {
      id: 'consultant',
      title: '景觀顧問｜專業規劃．低維護．長期好管理',
      subtitle: '不施工、不出售材料，只做專業顧問與景觀規劃報告',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
      contentImage: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800',
      description: '專注於專業價值的景觀顧問服務，幫助您在不浪費預算的前提下，打造最適合的綠意空間。',
      points: [
        '幫助客戶做最適合的景觀配置，降低未來維護成本',
        '規劃省水、省時、低照顧、良好管理的植栽與空間',
        '協助客戶專注高成本設計、減少浪費預算',
        '提供專業景觀評估、改造建議、整體規劃報告',
        '協助客戶與廠商溝通，避免被亂報價'
      ],
      emphasis: '強調：只做顧問，不做施工，專注專業價值',
      targets: ['社區、透天、店面、商業空間景觀需改造', '想要長期良好的居住、風景、低維護的景觀', '不想被廠商綁定、想要專業獨立顧問評估'],
      icon: <TreePine className="w-6 h-6" />,
      color: 'bg-moss-green'
    },
    lifestyle: {
      id: 'lifestyle',
      title: '生活美學會員｜健康．醫美．交流．純享受',
      subtitle: '不囤貨、不做事業，純粹生活品質提升',
      image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=80&w=1200',
      contentImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
      description: '為追求生活品質的您，提供一個純粹享受、健康與美學並重的專屬圈子。',
      points: [
        '年度健康營養補給，照顧身體基礎',
        '專屬醫美資源與優惠，變美更省錢',
        '同頻朋友交流、生活分享、輕鬆社交',
        '不涉及業績、不推廣、不銷售',
        '專門給予想放鬆、變美、照顧健康的人'
      ],
      emphasis: '純粹生活品質提升，無商業壓力',
      targets: ['追求健康生活者', '喜愛醫美與保養的人士', '渴望高品質社交圈的您'],
      icon: <Sparkles className="w-6 h-6" />,
      color: 'bg-moss-light'
    },
    partner: {
      id: 'partner',
      title: '景觀顧問事業夥伴｜低門檻．零庫存．增加第二收入',
      subtitle: '結合景觀顧問與生活資源，共同拓展收入',
      image: 'https://images.unsplash.com/photo-1600880210837-0f88b3362a50?auto=format&fit=crop&q=80&w=1200',
      contentImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      description: '利用您的人脈資源，與我們專業團隊合作，在零風險的情況下開啟您的第二事業。',
      points: [
        '不用施工、不用囤貨、不用懂設計',
        '介紹有景觀需求的客戶，即可獲顧問回饋',
        '介紹生活美學會員，還可以獲得額外收入',
        '我提供專業報告、課堂支援、完整的SOP',
        '適合想增加副業、有人脈、想穩定增收的人'
      ],
      emphasis: '低門檻、零庫存，專業團隊全程支援',
      targets: ['想增加副業收入者', '擁有廣泛人脈資源的人', '尋求穩定增收機會的夥伴'],
      icon: <Users className="w-6 h-6" />,
      color: 'bg-deep-gray'
    }
  };

  const current = sections[activeSection];

  return (
    <div className="min-h-screen font-sans selection:bg-moss-green selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-cream-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="text-moss-green w-8 h-8" />
            <span className="text-xl font-serif font-semibold tracking-wider text-deep-gray">景觀顧問整合平台</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setActiveSection('consultant')} className={`text-sm tracking-widest uppercase transition-colors ${activeSection === 'consultant' ? 'text-moss-green font-semibold' : 'text-deep-gray/60 hover:text-deep-gray'}`}>景觀顧問</button>
            <button onClick={() => setActiveSection('lifestyle')} className={`text-sm tracking-widest uppercase transition-colors ${activeSection === 'lifestyle' ? 'text-moss-green font-semibold' : 'text-deep-gray/60 hover:text-deep-gray'}`}>生活美學</button>
            <button onClick={() => setActiveSection('partner')} className={`text-sm tracking-widest uppercase transition-colors ${activeSection === 'partner' ? 'text-moss-green font-semibold' : 'text-deep-gray/60 hover:text-deep-gray'}`}>事業夥伴</button>
            <a href="#contact" className="bg-moss-green text-cream-white px-6 py-2 rounded-full text-sm tracking-widest hover:bg-deep-gray transition-all duration-300">立即諮詢</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={current.image} 
                alt={current.title}
                className="w-full h-full object-cover brightness-[0.7]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-deep-gray/40 via-transparent to-cream-white"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 border border-cream-white/30 rounded-full text-cream-white/80 text-xs tracking-[0.3em] uppercase mb-6 backdrop-blur-sm">
              Professional Integration Platform
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream-white mb-6 leading-tight">
              {current.title.split('｜')[0]}
              <br />
              <span className="text-2xl md:text-4xl opacity-90 italic font-light">
                {current.title.split('｜')[1]}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-cream-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide">
              {current.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveSection('consultant')}
                className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 ${activeSection === 'consultant' ? 'bg-moss-green text-white scale-105 shadow-lg' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'}`}
              >
                <TreePine className="w-5 h-5" />
                <span>景觀顧問</span>
              </button>
              <button 
                onClick={() => setActiveSection('lifestyle')}
                className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 ${activeSection === 'lifestyle' ? 'bg-moss-green text-white scale-105 shadow-lg' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'}`}
              >
                <Sparkles className="w-5 h-5" />
                <span>生活美學</span>
              </button>
              <button 
                onClick={() => setActiveSection('partner')}
                className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 ${activeSection === 'partner' ? 'bg-moss-green text-white scale-105 shadow-lg' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'}`}
              >
                <Users className="w-5 h-5" />
                <span>事業夥伴</span>
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-deep-gray/20"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-cream-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              key={`${activeSection}-content`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${current.color} text-white`}>
                  {current.icon}
                </div>
                <h2 className="text-3xl font-serif text-deep-gray">服務核心價值</h2>
              </div>
              <p className="text-xl text-deep-gray/70 mb-10 leading-relaxed font-light">
                {current.description}
              </p>
              
              <div className="space-y-6 mb-12">
                {current.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="mt-1 bg-moss-green/10 p-1 rounded-full group-hover:bg-moss-green transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-moss-green group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-lg text-deep-gray/80 group-hover:text-deep-gray transition-colors">{point}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-moss-green/5 border-l-4 border-moss-green rounded-r-2xl italic text-moss-green font-medium">
                {current.emphasis}
              </div>
            </motion.div>

            <motion.div
              key={`${activeSection}-targets`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-moss-green/10 border border-moss-green/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.contentImage}
                    src={current.contentImage}
                    alt="Section content"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-gray/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    適合對象
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {current.targets.map((target, index) => (
                      <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white border border-white/20">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-moss-green/5 border border-moss-green/10">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img 
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        className="w-10 h-10 rounded-full border-2 border-white"
                        alt="User"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-deep-gray/60">已有超過 500+ 位客戶與夥伴加入我們</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-24 bg-deep-gray text-cream-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">為什麼選擇我們？</h2>
            <p className="text-cream-white/60 max-w-xl mx-auto">整合景觀專業與生活美學，為您創造長期且穩定的價值。</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-moss-green rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="text-white" />
              </div>
              <h3 className="text-xl font-serif mb-4">專業獨立顧問</h3>
              <p className="text-cream-white/60 leading-relaxed">不綁定施工廠商，提供最客觀公正的評估報告，為您省下不必要的開支。</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-moss-light rounded-2xl flex items-center justify-center mb-6">
                <Heart className="text-white" />
              </div>
              <h3 className="text-xl font-serif mb-4">生活美學整合</h3>
              <p className="text-cream-white/60 leading-relaxed">不僅是景觀，更延伸至健康與美學，全方位提升您的生活品質與社交圈。</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-moss-green/50 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="text-white" />
              </div>
              <h3 className="text-xl font-serif mb-4">事業夥伴機制</h3>
              <p className="text-cream-white/60 leading-relaxed">完善的 SOP 與專業支援，讓您輕鬆開啟副業，共享平台成長紅利。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-cream-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-moss-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-moss-light/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-moss-green/10 border border-moss-green/5">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-deep-gray mb-4">開啟您的專屬規劃</h2>
              <p className="text-deep-gray/60">留下您的資訊，我們的顧問將在 24 小時內與您聯繫。</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-deep-gray/80 ml-1">姓名</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="您的稱呼"
                      className="w-full pl-12 pr-4 py-4 bg-cream-white/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-moss-green/20 focus:border-moss-green transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-deep-gray/80 ml-1">聯絡方式</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="tel" 
                      placeholder="電話或 LINE ID"
                      className="w-full pl-12 pr-4 py-4 bg-cream-white/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-moss-green/20 focus:border-moss-green transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-deep-gray/80 ml-1">需求類型</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['景觀顧問', '生活美學', '事業夥伴'].map((type) => (
                    <label key={type} className="relative cursor-pointer group">
                      <input type="radio" name="type" className="peer sr-only" defaultChecked={type === '景觀顧問'} />
                      <div className="p-4 text-center bg-cream-white/50 border border-gray-100 rounded-2xl peer-checked:bg-moss-green peer-checked:text-white peer-checked:border-moss-green transition-all group-hover:border-moss-green/30">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-deep-gray/80 ml-1">備註訊息 (選填)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea 
                    placeholder="請告訴我們更多關於您的需求..."
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 bg-cream-white/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-moss-green/20 focus:border-moss-green transition-all"
                  ></textarea>
                </div>
              </div>

              <button className="w-full py-5 bg-moss-green text-white rounded-2xl font-semibold text-lg tracking-widest hover:bg-deep-gray transition-all shadow-lg shadow-moss-green/20 flex items-center justify-center gap-2 group">
                <span>送出諮詢申請</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-gray py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Leaf className="text-moss-green w-6 h-6" />
              <span className="text-lg font-serif font-semibold tracking-wider text-cream-white">景觀顧問整合平台</span>
            </div>
            <div className="flex gap-8 text-cream-white/40 text-sm tracking-widest uppercase">
              <a href="#" className="hover:text-moss-green transition-colors">隱私政策</a>
              <a href="#" className="hover:text-moss-green transition-colors">服務條款</a>
              <a href="#" className="hover:text-moss-green transition-colors">合作洽談</a>
            </div>
            <p className="text-cream-white/20 text-xs">© 2026 景觀顧問整合服務平台. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
