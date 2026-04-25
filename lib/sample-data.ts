export const sampleQuestions = [
  'What are the best places to visit in Ethiopia?',
  'How do I plan a 5-day Ethiopia trip?',
  'Tell me about Ethiopian culture and traditions',
  'What food should I try in Ethiopia?',
  'What should tourists know before visiting Ethiopia?',
]

export const sampleAnswers: Record<string, string> = {
  'What are the best places to visit in Ethiopia?': `Ethiopia gives tourists a rare mix of ancient history, dramatic landscapes, and living culture.

Top places to consider:

Lalibela: Rock-hewn churches carved from stone, best for history, photography, and spiritual heritage.

Axum: Ancient obelisks, royal tombs, and deep links to Ethiopia's early civilization.

Gondar: Castles, palaces, and the Debre Berhan Selassie church, often called part of Ethiopia's royal route.

Simien Mountains: Big mountain views, hiking, gelada monkeys, and excellent nature trips.

Bahir Dar and Lake Tana: Monasteries, boat trips, lakeside walks, and access to Blue Nile Falls.

Addis Ababa: National Museum, Unity Park, Entoto, Merkato, coffee houses, and modern Ethiopian city life.

Danakil Depression: Salt flats, volcanic landscapes, and colorful geothermal areas for adventurous travelers.

For a first trip, I would combine Addis Ababa, Bahir Dar, Gondar, and Lalibela. It gives a strong introduction without rushing too much.`,

  'How do I plan a 5-day Ethiopia trip?': `Here is a simple 5-day starter itinerary for tourists visiting Ethiopia.

Day 1 - Addis Ababa:
Visit the National Museum, Entoto Park or Unity Park, then enjoy traditional dinner with music and coffee.

Day 2 - Bahir Dar:
Fly to Bahir Dar, take a Lake Tana boat trip, and visit selected monasteries.

Day 3 - Blue Nile Falls and Gondar:
See Blue Nile Falls in the morning, then travel to Gondar for the castle complex.

Day 4 - Lalibela:
Fly or drive to Lalibela and explore the famous rock-hewn churches with a local guide.

Day 5 - Lalibela to Addis Ababa:
Visit another church group in the morning, return to Addis Ababa, then shop for coffee, textiles, or crafts before departure.

Best season: October to March is usually easier for travel. Pack modest clothing for churches, comfortable shoes, sun protection, and light layers for highland evenings.`,

  'Tell me about Ethiopian culture and traditions': `Ethiopian culture is ancient, diverse, and strongly shaped by hospitality, faith, family, music, food, and coffee.

Important traditions tourists notice:

Coffee ceremony: Coffee is roasted, ground, brewed, and served slowly. It is a social ritual, not just a drink.

Hospitality: Guests are treated with warmth. A shared meal, especially injera with stews, is a common sign of welcome.

Faith and heritage: Ethiopian Orthodox Christianity, Islam, and local traditions all shape architecture, holidays, music, and daily life.

Festivals: Timkat in January and Meskel in September are two of the most colorful public celebrations.

Language: Amharic is widely used, and Ethiopia has many other languages including Oromo, Tigrinya, Somali, Afar, Sidama, and more.

Respect tips:
Dress modestly when visiting churches or rural communities, ask before taking close photos of people, and use your right hand when giving or receiving items.`,

  'What food should I try in Ethiopia?': `Start with injera, the soft sour flatbread made from teff. Most Ethiopian meals are served on injera and eaten by hand.

Recommended dishes:

Doro wot: A rich spicy chicken stew, often served with boiled egg.

Shiro: A smooth chickpea or bean stew, popular and comforting.

Tibs: Sauteed meat with onion, peppers, rosemary, and spices.

Misir wot: Spiced red lentils, excellent for vegetarian travelers.

Gomen: Cooked greens with garlic and mild seasoning.

Beyaynetu: A mixed platter, often vegetarian, with several small dishes on injera.

Kitfo: Finely minced beef with spiced butter, usually for adventurous diners. You can ask for it cooked.

Do not miss the coffee ceremony. Ethiopia is the birthplace of coffee, and the ceremony is one of the best cultural experiences for visitors.`,

  'What should tourists know before visiting Ethiopia?': `A few practical tips will make an Ethiopia trip smoother.

Travel style:
Distances can be long, so domestic flights are useful for short trips. Hire local guides for historical sites because context matters.

Money:
Carry cash for smaller shops, markets, guides, and rural areas. Cards work mainly in larger hotels and some restaurants.

Clothing:
Bring modest clothes for churches and cultural sites. Comfortable walking shoes are essential.

Health:
Drink bottled or filtered water. Check travel health advice before your trip, especially if visiting lowland areas.

Photography:
Ask before photographing people, religious ceremonies, or sensitive places.

Best first-time route:
Addis Ababa, Bahir Dar, Gondar, and Lalibela. Add Simien Mountains if you like hiking, or Danakil if you want a more adventurous expedition.

Local etiquette:
Greetings matter, coffee invitations are meaningful, and patience goes a long way. Ethiopia rewards travelers who slow down and listen.`,
}

export function getSampleResponse(question: string): string | null {
  if (sampleAnswers[question]) {
    return sampleAnswers[question]
  }

  const lowerQuestion = question.toLowerCase()

  for (const [key, answer] of Object.entries(sampleAnswers)) {
    const keywords = key
      .toLowerCase()
      .replace(/[?]/g, '')
      .split(' ')
      .filter((word) => word.length > 3)

    if (keywords.some((word) => lowerQuestion.includes(word))) {
      return answer
    }
  }

  return null
}
