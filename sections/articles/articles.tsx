import Image from "next/image";

import Article from "./article/article";

// Articles
import ArticleImg1 from '../../assets/images/articles/1.jpg';
import ArticleImg2 from '../../assets/images/articles/2.jpg';
import ArticleImg3 from '../../assets/images/articles/3.jpg';
import ArticleImg4 from '../../assets/images/articles/4.jpg';
import ArticleImg5 from '../../assets/images/articles/5.jpg';
import ArticleImg6 from '../../assets/images/articles/6.jpg';
import ArticleImg7 from '../../assets/images/articles/7.jpg';
import ArticleImg8 from '../../assets/images/articles/8.jpg';
import ArticleImg9 from '../../assets/images/articles/9.jpg';

// Avatars
import AvatarImg1 from '../../assets/images/avatars/1.jpg';
import AvatarImg2 from '../../assets/images/avatars/2.jpg';
import AvatarImg3 from '../../assets/images/avatars/3.jpg';

const Articles = () => {
    return (
        <section className="py-5">
            <div className="container mx-auto px-10">
                <div className=" my-10">
                    <h3 className="header-color my-5 text-2xl font-bold">Latest articles</h3>
                    <div className="border-b border-gray-600" />
                </div>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-10">
                    <Article
                        articleImg={ArticleImg1}
                        avatarImg={AvatarImg1}
                        title="The quick brown fox jumped over the lazy dog."
                        author="Anastasia Dan"
                    />
                    <Article
                        articleImg={ArticleImg2}
                        avatarImg={AvatarImg2}
                        title="The quick brown fox jumped over the lazy dog."
                        author="Anastasia Dan"
                    />
                    <Article
                        articleImg={ArticleImg3}
                        avatarImg={AvatarImg3}
                        title="The quick brown fox jumped over the lazy dog."
                        author="Anastasia Dan"
                    />
                    <Article
                        articleImg={ArticleImg4}
                        avatarImg={AvatarImg1}
                        title="The quick brown fox jumped over the lazy dog."
                        author="Anastasia Dan"
                    />
                    <Article
                        articleImg={ArticleImg5}
                        avatarImg={AvatarImg2}
                        title="The quick brown fox jumped over the lazy dog."
                        author="Anastasia Dan"
                    />
                    <Article
                        articleImg={ArticleImg6}
                        avatarImg={AvatarImg3}
                        title="The quick brown fox jumped over the lazy dog."
                        author="Anastasia Dan"
                    />
                    <Article
                        articleImg={ArticleImg7}
                        avatarImg={AvatarImg1}
                        title="The quick brown fox jumped over the lazy dog."
                        author="Anastasia Dan"
                    />
                    <Article
                        articleImg={ArticleImg8}
                        avatarImg={AvatarImg2}
                        title="The quick brown fox jumped over the lazy dog."
                        author="Anastasia Dan"
                    />
                    <Article
                        articleImg={ArticleImg9}
                        avatarImg={AvatarImg3}
                        title="The quick brown fox jumped over the lazy dog."
                        author="Anastasia Dan"
                    />
                </div>
            </div>
        </section>
    )
}

export default Articles;