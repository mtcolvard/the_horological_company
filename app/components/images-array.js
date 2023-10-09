import Image from 'next/image'
import Link from 'next/link'


const ImageArray = ({ imageObject }) => {
  const regular = { maxWidth: '100%' }
  const medium = { display: 'block', width: '66%', marginLeft: 'auto', marginRight: 'auto' }
  const skinny = { display: 'block', width: '50%', marginLeft: 'auto', marginRight: 'auto' }

  return (
    imageObject.map((image, i) =>
      <div className="content "
        key={i}
      >
        <div className="text-base mt-4 md:m-0 md:pt-4">
          <div className="pictureCaptionMobile text-sm md:hidden mb-6">
            <div><span className="italic">{image.title}</span></div>
            <div>{image.size}{image.material}</div>
          </div>
          <div className="pictureCapitionComputer mb-6">
            <div className="hidden md:block ">
              <div><span className="italic text-xl">{image.title}</span></div>
              <div>{image.size}{image.material}</div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <Link href={image.link}>
            {i === 0 && image.style === 'regular' &&
              <Image
                src={image.src}
                alt={image.alt}
                style={regular}
                priority
              />
            }
            {i === 0 && image.style === 'medium' &&
              <Image
                src={image.src}
                alt={image.alt}
                style={medium}
                priority
              />
            }
            {i === 0 && image.style === 'skinny' &&
              <Image
                src={image.src}
                alt={image.alt}
                style={skinny}
                priority
              />
            }
            {i !== 0 && image.style === 'regular' &&
              <Image
                src={image.src}
                alt={image.alt}
                style={regular}
              />
            }
            {i !== 0 && image.style === 'medium' &&
              <Image
                src={image.src}
                alt={image.alt}
                style={medium}
              />
            }

            {i !== 0 && image.style === 'skinny' &&
              <Image
                src={image.src}
                alt={image.alt}
                style={skinny}
              />
            }

          </Link>

        </div>
      </div>
    )
  )
}
export default ImageArray;
