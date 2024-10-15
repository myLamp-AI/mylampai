import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Ultron from "@/public/blog/ultron.jpg";
import Image from "next/image";

export default function FeaturedContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-700">
          Featured Content
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Image
              src={Ultron}
              alt="Featured 1"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div>
              <h5 className="font-bold">Machine Learning Basics</h5>
              <p className="text-sm text-gray-600">
                An introduction to ML concepts
              </p>
            </div>
          </div>
          {/* Add more featured content items */}
        </div>
      </CardContent>
    </Card>
  );
}
