import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne" style={{ background: "linear-gradient(to bottom, #165FF2, #1D62F1)" }}>
      <br></br><br></br><br></br><br></br>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {tagline && (
              <p className="text-base font-semibold uppercase tracking-wide text-primary-600">
                {tagline}
              </p>
            )}
            {title && (
              <h1 className="leading-tighter font-heading mb-2 text-white text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                {title}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-2 text-xl font-normal text-white">{subtitle}</p>}
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && <CTA callToAction={callToAction} linkClass="btn" />}
                {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
              </div>
            </div>
          </div>
          {image && (
            <div className="relative m-auto max-w-5xl">
              <div className="rounded-md overflow-hidden">
                <Image
                  className="mx-auto h-auto w-full"
                  src={image.src}
                  alt={image.alt}
                  width={1024}
                  height={607}
                  sizes="(max-width: 64rem) 100vw, 1024px"
                  loading="eager"
                  // placeholder="blur"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <br></br>
    </section>
  );
};

export default Hero;
