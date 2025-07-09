import Container from "../../Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Img from "../../LazyLoadImg";

const Advantages = [
    {
        id: 1,
        title: "مدیریت متمرکز مشتری ها",
        description: "همه اطلاعات مشتریان در یک مکان، همیشه در دسترس",
    },
    {
        id: 2,
        title: "افزایش بهره ‌وری تیم فروش",
        description: "کارها سریع ‌تر و هدفمند تر انجام می‌شوند",
    },
    {
        id: 3,
        title: "پیگیری خودکار سرنخ ها",
        description: "هیچ مشتری احتمالی از دست نمی‌رود",
    },
    {
        id: 4,
        title: "یادآوری و پیگیری خودکار کارها",
        description: "بدون فراموشی و با نظم پیش برو",
    },
    {
        id: 5,
        title: "گزارش ‌گیری دقیق و فوری",
        description: "تصمیم ‌گیری با داده ‌های واقعی",
    },
    {
        id: 6,
        title: "اتوماسیون بازاریابی",
        description: "ارسال پیام ‌ها و ایمیل‌ ها به ‌صورت زمان‌بندی‌شده",
    },
    {
        id: 7,
        title: "دسترسی آسان از هر جا",
        description: "فقط با اینترنت، روی هر دستگاهی",
    },
    {
        id: 8,
        title: "بهبود تجربه مشتری",
        description: "پاسخ ‌دهی سریع‌ تر، ارتباط بهتر اعتماد بیشتر",
    },
    {
        id: 9,
        title: "یکپارچگی با ابزارهای دیگر",
        description: "اتصال با واتساپ، ایمیل، فرم ‌ها",
    },
];

const HomeMobile = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="border-b border-dashed border-black px-4 py-8 bg-gradient-to-b from-white via-amber-100 to-white">
                <Container>
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="text-3xl font-bold text-center">
                            به دنیای مدیریت هوشمند مشتریان
                        </h1>
                        <h2 className="text-3xl font-bold text-secondary text-center">
                            ! 👋همراه کارفرما خوش اومدی
                        </h2>
                        <Img src="section1.svg" alt="hamrah crm" width={300} height={270} />
                        <div className="flex flex-col gap-3 text-center text-lg font-bold">
                            <p>اینجا جاییه که ارتباط با مشتری، پیگیری سرنخ‌ها و رشد فروش</p>
                            <p>خیلی ساده ‌تر از همیشه می‌شه</p>
                            <p>ما طراحی شده تا کسب‌وکار تو رو منظم‌ تر، سریع ‌تر و حرفه‌ای ‌تر کنه؛ CRM🔹</p>
                            <p>بدون نیاز به پیچیدگی یا آموزش طولانی</p>
                            <p>از همین الان می‌تونی حساب رایگان بسازی، امکانات رو ببینی و با چند کلیک🔹</p>
                            <p>ساده شروع کنی</p>
                            <p>برای شروع، فقط دکمه زیر رو بزن یا از راهنمای قدم‌به‌قدم ما کمک بگیر</p>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <Link href="/services">
                                <Button variant="bold" className="w-full bg-chart-6 shadow-xl">
                                    شروع کنید
                                </Button>
                            </Link>
                            <Link href="/guide">
                                <Button variant="bold" className="w-full bg-secondary shadow-xl">
                                    راهنمای استفاده
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CRM Definition Section */}
            <section className="border-b border-dashed border-black bg-gradient-to-t from-white via-amber-100 to-white px-4 py-8">
                <Container>
                    <div className="flex flex-col items-center gap-6">
                        <Img src="section2.svg" alt="hamrah crm" width={250} height={250} />
                        <h1 className="text-4xl text-secondary font-bold text-center [--text-stroke:2px] [--text-stroke-color:black] [paint-order:stroke_fill] [-webkit-text-stroke:var(--text-stroke)_var(--text-stroke-color)]">
                            سی آر اِم چیست؟ (CRM)
                        </h1>
                        <div className="flex flex-col gap-4 text-right text-lg font-bold max-w-md">
                            <p>سی ار ام مجموعه ای از ابزارهاست که پیاده سازی استراتژی های</p>
                            <p>بازاریابی، فروش و خدمات پس از فروش و… با محوریت مشتری ممکن می سازد.</p>
                            <p>تمامی اقدامات صورت گرفته در سازمان باید با هدف ارائه ی راه حل</p>
                            <p>موثر و حقیقی مشکلات مشتری ها، در کوتاه ترین زمان ممکن، و با بهترین</p>
                            <p>نوع برخورد باشد.</p>
                            <p>با استفاده از نرم افزار همراه کارفرما بخش قابل توجهی از فرآیند حفظ مشتری را می</p>
                            <p>توانید به صورت خودکار انجام دهید.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Advantages Section */}
            <section className="border-b border-dashed border-black bg-gradient-to-t from-white via-amber-100 to-white px-4 py-8">
                <Container>
                    <h1 className="text-4xl text-secondary font-bold text-center mb-8 [--text-stroke:2px] [--text-stroke-color:black] [paint-order:stroke_fill] [-webkit-text-stroke:var(--text-stroke)_var(--text-stroke-color)]">
                        مزیت های کلیدی همراه کارفرما چیست؟
                    </h1>
                    <div className="flex flex-col gap-6">
                        {Advantages.map((adv) => (
                            <div
                                key={adv.id}
                                className={`flex flex-col items-center border-2 rounded-lg p-4 shadow-xl w-full max-w-md mx-auto ${adv.id % 2 === 0 ? "bg-secondary" : "bg-white"
                                    }`}
                            >
                                <Img
                                    src={`./section3/${adv.id}.svg`}
                                    alt={adv.title}
                                    width={70}
                                    height={70}
                                />
                                <h2 className="text-2xl font-bold mt-3 text-center">{adv.title}</h2>
                                <p className="text-lg font-semibold text-center">{adv.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Call to Action Section */}
            <section className="px-4 py-8 bg-gradient-to-r from-white via-amber-100 to-white">
                <Container>
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="font-bold text-2xl text-center max-w-md">
                            با ابزارهایی که دیدی، می‌تونی ارتباطاتت رو هدفمندتر و مدیریت کسب‌وکار رو هوشمندتر کنی.
                        </h1>
                        <h2 className="font-bold text-2xl text-center max-w-md">
                            حالا نوبت توئه که وارد مسیر رشد بشی.
                        </h2>
                        <div className="flex flex-col gap-4 w-full max-w-xs">
                            <Link href="/services">
                                <Button variant="bold" className="w-full bg-chart-6 shadow-xl rounded-2xl animate-bounce">
                                    بزن بریم
                                </Button>
                            </Link>
                            <Link href="/guide">
                                <Button variant="bold" className="w-full bg-secondary shadow-xl rounded-2xl">
                                    راهنمای استفاده
                                </Button>
                            </Link>
                        </div>
                        <Img src="section4.svg" alt="hamrah crm" width={300} height={200} />
                        <div className="text-center max-w-md font-medium text-3xl [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
                            <p>مشتری‌ هات رو بهتر بشناس، سریع‌ تر پاسخ بده، هوشمندانه‌ تر رشد کن.</p>
                            <p>همه این‌ها از اینجا شروع می‌شه.</p>
                            <p>شروع کن و آینده کسب و کارِت رو بساز!</p>
                        </div>
                    </div>
                </Container>
            </section>

            <div className="h-20" />
        </main>
    );
};

export default HomeMobile;
