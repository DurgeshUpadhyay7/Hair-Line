"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Amazing Transformations</h2>
          <p className="text-foreground/70">See the incredible results our clients have achieved</p>
        </div>

        <Card className="overflow-hidden">
          <div className="relative w-full h-96">
            {/* After Image */}
            <img src="/hair-restoration-after-treatment-healthy-hair.jpg" alt="After treatment" className="w-full h-full object-cover" />

            {/* Before Image Overlay */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
              <img src="/hair-loss-before-treatment-sparse-hair.jpg" alt="Before treatment" className="w-full h-full object-cover" />
            </div>

            {/* Slider Handle */}
            <div className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize" style={{ left: `${position}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-semibold">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-semibold">
              After
            </div>
          </div>

          {/* Slider Input */}
          <div className="p-6 bg-white">
            <Slider
              value={[position]}
              onValueChange={(value) => setPosition(value[0])}
              min={0}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="text-center text-sm text-foreground/70 mt-4">Drag to compare results</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
