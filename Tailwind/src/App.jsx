import React from 'react'
import Page1 from './components/Page1/Page1'
const App = () => {

const cars = [
  {
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    intro: "The Porsche 911 tears through the city night, its taillights leaving a streak of neon red against the dark urban canvas.",
    tag: "Night Runner"
  },
  {
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1964&auto=format&fit=crop",
    intro: "A shadow in the dark, this luxury machine reflects the cold blue hues of the city skyline, delivering silent power.",
    tag: "Midnight Stealth"
  },
  {
    img: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=1944&auto=format&fit=crop",
    intro: "Bathed in purple neon, this high-performance Audi R8 embodies the futuristic cyberpunk aesthetic of the modern underground.",
    tag: "Neon Cyberpunk"
  },
  {
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2047&auto=format&fit=crop",
    intro: "The raw aggression of the GT-R comes alive under the streetlamps, a beast waiting to be unleashed on the empty highway.",
    tag: "Street Legend"
  },
  {
    img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1974&auto=format&fit=crop",
    intro: "Sleek, dark, and menacing. The McLaren P1 sits low on the asphalt, glowing faintly under the industrial lights of the harbor.",
    tag: "Hyper Dark"
  },
  {
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2064&auto=format&fit=crop",
    intro: "Rain-slicked streets reflect the vibrant city lights off the body of this performance machine, blending chaos with control.",
    tag: "Urban Drift"
  }
];


//data App->Page1->RightContent->Card->CardContent
  return (
    <div >
      <Page1 cars={cars}/>
    </div>
  )
}

export default App
 