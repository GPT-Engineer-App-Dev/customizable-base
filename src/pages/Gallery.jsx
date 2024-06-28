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