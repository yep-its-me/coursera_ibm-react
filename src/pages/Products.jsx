import { Page } from "./Page";
import { ProductCard } from "../components/ProductCard";
import aloe_vera from "../assets/flowers/aloe_vera.jpg";
import bluebell from "../assets/flowers/bluebell.jpg";
import boston_fern from "../assets/flowers/boston_fern.jpg";
import cherry_blossom from "../assets/flowers/cherry_blossom.jpg";
import crocus from "../assets/flowers/crocus.jpg";
import daffodil from "../assets/flowers/daffodil.jpg";
import hyacinth from "../assets/flowers/hyacinth.jpg";
import jasmine from "../assets/flowers/jasmine.jpg";
import lavender from "../assets/flowers/lavender.jpg";
import lemon_balm from "../assets/flowers/lemon_balm.jpg";
import magnolia from "../assets/flowers/magnolia.jpg";
import mint from "../assets/flowers/mint.jpg";
import peace_lily from "../assets/flowers/peace_lily.jpg";
import rosemary from "../assets/flowers/rosemary.jpg";
import rubber_plant from "../assets/flowers/rubber_plant.jpg";
import snake_plant from "../assets/flowers/snake_plant.jpg";
import spider_plant from "../assets/flowers/spider_plant.jpg";
import tulip from "../assets/flowers/tulip.jpg";

export const Products = () => {
    return (
        <Page>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center", alignItems: "center", padding: 24, height: "100%" }}>
                <div>
                    <h1 style={{ fontSize: 24, borderBottom: "1px solid black", borderTop: "1px solid black", padding: 16, letterSpacing: 3 }}>Air Purifying Plants</h1>
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
                    <ProductCard
                        onSale={true}
                        picture={snake_plant}
                        name="Snake Plant"
                        description={
                            "Also known as mother-in-law's tongue, the snake plant features long, upright leaves with variegated patterns of green and yellow. It is a hardy indoor plant that is easy to care for and is known for its air-purifying properties."
                        }
                    />
                    <ProductCard
                        onSale={true}
                        picture={spider_plant}
                        name="Spider Plant"
                        description={
                            'The spider plant has long, arching leaves that are green with white stripes. It produces small white flowers and "spiderettes" or baby plants that hang down from the mother plant. It is popular for its ease of care and ability to thrive in various conditions.'
                        }
                    />
                    <ProductCard
                        name="Peace Lily"
                        picture={peace_lily}
                        description={
                            "Peace lilies have glossy, dark green leaves and produce elegant white flowers called spathes, which are modified leaves surrounding a spadix. They are known for their ability to improve indoor air quality and thrive in low light."
                        }
                    />
                    <ProductCard
                        onSale={true}
                        picture={boston_fern}
                        name="Boston Fern"
                        description={
                            "Boston ferns have lush, arching fronds with finely divided leaflets, giving them a feathery appearance. They are commonly used as indoor plants or hanging baskets and prefer humid environments with indirect light."
                        }
                    />
                    <ProductCard
                        name="Rubber Plant"
                        picture={rubber_plant}
                        description={
                            "The rubber plant features large, glossy, dark green leaves that can sometimes have a burgundy hue. It is a popular houseplant due to its attractive foliage and ability to adapt to indoor conditions with moderate light and water."
                        }
                    />
                    <ProductCard
                        onSale={true}
                        picture={aloe_vera}
                        name="Aloe Vera"
                        description={
                            "Aloe vera is a succulent plant with thick, fleshy leaves that contain a gel-like substance known for its soothing and healing properties. It is easy to grow indoors and prefers bright, indirect light and infrequent watering."
                        }
                    />
                </div>
                <div>
                    <h1 style={{ fontSize: 24, borderBottom: "1px solid black", borderTop: "1px solid black", padding: 16, letterSpacing: 3 }}>Aromatic Fragrant Plants</h1>
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
                    <ProductCard
                        name="Lavender"
                        picture={lavender}
                        description={
                            "Lavender is a fragrant herb with slender, gray-green leaves and spikes of small purple flowers. It is known for its calming scent and is commonly used in aromatherapy, culinary dishes, and ornamental gardens."
                        }
                    />
                    <ProductCard
                        onSale={true}
                        name="Jasmine"
                        picture={jasmine}
                        description={
                            "Jasmine plants produce clusters of small, star-shaped, highly fragrant flowers that are typically white or yellow. They are often grown on trellises or as ground cover and are prized for their sweet scent and ornamental beauty."
                        }
                    />
                    <ProductCard
                        name="Rosemary"
                        picture={rosemary}
                        description={
                            "Rosemary is a woody, evergreen herb with needle-like leaves and small, blue or white flowers. It is used in cooking for its aromatic leaves and has a pleasant, pine-like fragrance. It prefers full sun and well-drained soil."
                        }
                    />
                    <ProductCard
                        onSale={true}
                        picture={mint}
                        name="Mint"
                        description={
                            "Mint plants have square stems, aromatic leaves, and small purple, pink, or white flowers. They are vigorous growers, often spreading quickly, and are commonly used in culinary dishes, beverages, and herbal remedies."
                        }
                    />
                    <ProductCard
                        onSale={true}
                        picture={lemon_balm}
                        name="Lemon Balm"
                        description={
                            "Lemon balm is a perennial herb with heart-shaped, serrated leaves that emit a lemony scent. It produces small white or pale yellow flowers and is used in teas, culinary dishes, and aromatherapy for its calming properties."
                        }
                    />
                    <ProductCard
                        picture={hyacinth}
                        name="Hyacinth"
                        description={
                            "Hyacinths have dense spikes of fragrant, bell-shaped flowers that come in a variety of colors, including blue, pink, purple, white, and yellow. They are popular spring bulbs that add vibrant color and a sweet scent to gardens."
                        }
                    />
                </div>
                <div>
                    <h1 style={{ fontSize: 24, borderBottom: "1px solid black", borderTop: "1px solid black", padding: 16, letterSpacing: 3 }}>Spring Blossoms</h1>
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
                    <ProductCard
                        onSale={true}
                        name="Tulip"
                        picture={tulip}
                        description={"Tulips are known for their vibrant colors and cup-shaped blooms. They are one of the most popular spring flowers."}
                    />
                    <ProductCard
                        onSale={true}
                        name="Daffodil"
                        picture={daffodil}
                        description={"Daffodils are bright, yellow flowers that symbolize rebirth and new beginnings. They are among the first flowers to bloom in spring."}
                    />
                    <ProductCard
                        name="Cherry Blossom"
                        picture={cherry_blossom}
                        description={"Cherry blossoms are iconic spring flowers, especially in Japan. They have delicate pink or white petals and are celebrated for their beauty."}
                    />
                    <ProductCard
                        onSale={true}
                        name="Crocus"
                        picture={crocus}
                        description={
                            "Crocuses are small, delicate flowers that often bloom even when there is still snow on the ground. They come in colors like purple, yellow, and white."
                        }
                    />
                    <ProductCard
                        onSale={true}
                        name="Magnolia"
                        picture={magnolia}
                        description={"Magnolias are known for their large, showy flowers that can be white, pink, purple, or yellow. They often bloom early in the spring."}
                    />
                    <ProductCard
                        name="Bluebell"
                        picture={bluebell}
                        description={
                            "Bluebells are known for their bell-shaped, violet-blue flowers that often carpet woodland floors in the spring, creating a stunning blue haze. They are highly fragrant and symbolize humility and gratitude."
                        }
                    />
                </div>
            </div>
        </Page>
    );
};
