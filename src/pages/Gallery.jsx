import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const images = [
  { id: 1, src: "/images/lion.jpg", title: "Lion", fact: "Lions are the only cats that live in groups." },
  { id: 2, src: "/images/elephant.jpg", title: "Elephant", fact: "Elephants are the largest land animals on Earth." },
  { id: 3, src: "/images/tiger.jpg", title: "Tiger", fact: "Tigers have striped skin, not just striped fur." },
  { id: 4, src: "/images/giraffe.jpg", title: "Giraffe", fact: "Giraffes are the tallest mammals on Earth." },
  { id: 5, src: "/images/zebra.jpg", title: "Zebra", fact: "Every zebra has a unique pattern of black and white stripes." },
  { id: 6, src: "/images/panda.jpg", title: "Panda", fact: "Pandas have lived on Earth for two to three million years." },
  { id: 7, src: "/images/kangaroo.jpg", title: "Kangaroo", fact: "Kangaroos can hop around quickly on two legs or walk around slowly on all four." },
  { id: 8, src: "/images/hippo.jpg", title: "Hippo", fact: "Hippos are the third largest land mammals after elephants and white rhinos." },
  { id: 9, src: "/images/icelandic-horse.jpg", title: "Icelandic Horse", fact: "Icelandic horses are known for their unique gaits and small, sturdy build." },
  { id: 10, src: "/images/moose.jpg", title: "Moose", fact: "Moose are the largest species in the deer family and are known for their impressive antlers." },
  { id: 11, src: "/images/lynx.jpg", title: "Lynx", fact: "Lynxes are medium-sized wild cats known for their tufted ears and short tails." },
  { id: 12, src: "/images/eurasian-elk.jpg", title: "Eurasian Elk", fact: "The Eurasian elk is a large deer species found in the forests of Sweden." },
  { id: 13, src: "/images/white-tailed-eagle.jpg", title: "White-Tailed Eagle", fact: "White-tailed eagles are one of the largest birds of prey in Sweden." },
  { id: 14, src: "/images/black-grouse.jpg", title: "Black Grouse", fact: "Black grouse are known for their distinctive mating displays and are found in Swedish forests." },
  { id: 15, src: "/images/unicorn.jpg", title: "Unicorn", fact: "Unicorns are legendary creatures known for their magical powers and single horn." },
  { id: 16, src: "/images/ox.jpg", title: "Ox", fact: "Oxen are strong and are often used as draft animals." },
  { id: 17, src: "/images/cow.jpg", title: "Cow", fact: "Cows have a strong sense of smell and can detect odors up to six miles away." },
];

const Gallery = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Animal Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Card key={image.id}>
            <CardHeader>
              <CardTitle>{image.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9}>
                <img src={image.src} alt={image.title} className="object-cover w-full h-full rounded-md" />
              </AspectRatio>
              <p className="mt-2">{image.fact}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;