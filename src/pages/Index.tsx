import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Star,
  Users,
  TrendingUp,
  Check,
  Shield,
  Smartphone,
  Award,
} from "lucide-react";
const heroImage = "/lovable-uploads/bcf4c17c-848d-4699-937b-3140983876dd.png";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToOffer = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Countdown Bar */}
      <div className="countdown-bar">
        <div className="container mx-auto px-4 h-full flex items-center justify-center text-white">
          <div className="flex items-center gap-4 text-sm font-bold">
            <Clock className="w-4 h-4" />
            <span>⚡ OFERTA EXPIRA EM:</span>
            <div className="flex gap-2">
              <span>{timeLeft.hours.toString().padStart(2, "0")}h</span>
              <span>{timeLeft.minutes.toString().padStart(2, "0")}m</span>
              <span>{timeLeft.seconds.toString().padStart(2, "0")}s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge className="mb-4 bg-gold text-foreground px-4 py-2 text-lg font-bold">
                🍓 RECEITA VIRAL
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Morango do <br />
              <span className="text-gold">Amor Perfeito</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              A receita que viralizou agora pode mudar a sua vida
            </p>

            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Descubra como preparar o doce mais desejado do momento e
              transformar essa delícia em uma fonte de renda real, mesmo que
              você nunca tenha feito um doce na vida!
            </p>

            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12">
              <img
                src={heroImage}
                alt="Morango do Amor Perfeito"
                className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-cover rounded-3xl shadow-2xl pulse-glow border-4 border-gold/30"
              />

              <div className="text-left">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 mr-2" />
                    <span className="font-bold">1.247 alunas satisfeitas</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    <span className="font-bold">R$ 89 mil em faturamento</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-6 h-6 mr-2 text-gold" />
                    <span className="font-bold">
                      Avaliação 4,9/5 ⭐⭐⭐⭐⭐
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Offer Card in Hero */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 mb-8 max-w-md mx-auto shadow-2xl border-4 border-gold/30">
              <div className="text-center">
                <Badge className="bg-destructive text-white px-4 py-2 text-lg font-bold mb-4">
                  🔥 OFERTA LIMITADA
                </Badge>
                <div className="text-3xl font-bold text-muted-foreground line-through mb-2">
                  R$ 47,90
                </div>
                <div className="text-5xl font-extrabold text-strawberry mb-4">
                  R$ 9,90
                </div>
                <p className="text-sm text-muted-foreground font-bold">
                  79% de desconto - Apenas hoje!
                </p>
              </div>
            </div>

            <Button
              onClick={() =>
                window.open(
                  "https://pay.kirvano.com/4a9ffc34-530e-4e51-bad1-190cfff154fb",
                  "_blank"
                )
              }
              className="btn-cta btn-blink mb-8"
            >
              🍓 QUERO COMEÇAR AGORA 🍓
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              💘 O que você vai receber:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "📋",
                title: "Receita completa e passo a passo",
                description: "Tudo explicado de forma simples e clara",
              },
              {
                icon: "✨",
                title: "Segredo da calda perfeita",
                description: "Brilhante e crocante como um profissional",
              },
              {
                icon: "🎯",
                title: "Técnica de recheio profissional",
                description: "O diferencial que faz toda a diferença",
              },
              {
                icon: "📦",
                title: "Dicas de embalagem para vender mais",
                description: "Apresentação que conquista clientes",
              },
              {
                icon: "💰",
                title: "Estratégias reais para lucrar",
                description: "Como transformar em fonte de renda",
              },
              {
                icon: "📱",
                title: "PDF + Certificado incluso",
                description: "Para consulta e comprovação",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-strawberry">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                  <Check className="w-6 h-6 text-success mx-auto mt-4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-strawberry-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-strawberry mb-6">
              💬 Veja o que nossas alunas estão dizendo:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Maria",
                location: "SP",
                testimonial: "Faturei R$ 400 no primeiro fim de semana!",
                rating: 5,
              },
              {
                name: "Ana",
                location: "RJ",
                testimonial:
                  "Aroveitei o momento da onda de Morango do amor e já tenho lista de espera!",
                rating: 5,
              },
              {
                name: "Carla",
                location: "MG",
                testimonial: "Em 3 dias comecei a vender sem parar!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-gold fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg font-medium mb-4 text-foreground">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <p className="font-bold text-strawberry">
                    – {testimonial.name} ({testimonial.location})
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              🎯 Tudo isso por apenas:
            </h2>

            <div className="bg-strawberry-light rounded-3xl p-12 mb-12">
              <div className="text-6xl font-bold text-muted-foreground line-through mb-4">
                R$ 47,90
              </div>
              <div className="text-8xl font-extrabold text-strawberry mb-6">
                R$ 9,90
              </div>
              <Badge className="bg-destructive text-white px-6 py-3 text-xl font-bold mb-8">
                79% de desconto - Oferta por tempo limitado
              </Badge>

              <br></br>

              <Button
                onClick={() =>
                  window.open(
                    "https://pay.kirvano.com/4a9ffc34-530e-4e51-bad1-190cfff154fb",
                    "_blank"
                  )
                }
                className="btn-cta mb-8"
              >
                🍓 CLIQUE AQUI PARA COMEÇAR AGORA 🍓
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-8 h-8 text-success" />
                <div className="text-left">
                  <p className="font-bold">Garantia incondicional</p>
                  <p className="text-muted-foreground">
                    7 dias - sem burocracia
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Smartphone className="w-8 h-8 text-strawberry" />
                <div className="text-left">
                  <p className="font-bold">Suporte WhatsApp</p>
                  <p className="text-muted-foreground">Tire suas dúvidas</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-gold" />
                <div className="text-left">
                  <p className="font-bold">Acesso vitalício</p>
                  <p className="text-muted-foreground">+ Certificado incluso</p>
                </div>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-8">
              🔒 Se não amar, devolvemos seu dinheiro. Sem burocracia.
            </p>

            <Button
              onClick={() =>
                window.open(
                  "https://pay.kirvano.com/4a9ffc34-530e-4e51-bad1-190cfff154fb",
                  "_blank"
                )
              }
              className="btn-cta"
            >
              GARANTIR MINHA VAGA AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              💥 Resultados Reais que Comprovam:
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">1.247</div>
                <p className="text-lg">Alunas Satisfeitas</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">R$ 89k</div>
                <p className="text-lg">Faturamento Acumulado</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">4,9/5</div>
                <p className="text-lg">Avaliação Média ⭐</p>
              </div>
            </div>

            <p className="text-2xl mb-8">
              ⚠️ Não perca essa oportunidade única!
            </p>

            <Button
              onClick={() =>
                window.open(
                  "https://pay.kirvano.com/4a9ffc34-530e-4e51-bad1-190cfff154fb",
                  "_blank"
                )
              }
              className="btn-cta"
            >
              🍓 SIM, EU QUERO FATURAR COM MORANGO! 🍓
            </Button>

            <p className="text-lg mt-8 opacity-90">
              📱 Suporte por WhatsApp | 🏆 Certificado de conclusão | ♾️ Acesso
              vitalício
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
