import { useRouter } from "next/router";

const TutorialPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const tutorial = tutorialContent.find(t => t.path.endsWith(slug));
    return tutorial ? (
        <div>{/* Render tutorial */}</div>
    ) : (
        <div>Tutorial Not Found</div>
    );
};

export default TutorialPage;
