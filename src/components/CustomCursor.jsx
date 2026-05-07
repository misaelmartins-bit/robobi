import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

    useEffect(() => {
        if (isMobile) return;

        const cursor = cursorRef.current;
        const cursorBorder = cursorBorderRef.current;

        // Isso força o ponto de ancoragem para o centro exato das div's
        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
            left: 0,
            top: 0
        });

        const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });
        const xToBorder = gsap.quickTo(cursorBorder, "x", { duration: 0.5, ease: "power3.out" });
        const yToBorder = gsap.quickTo(cursorBorder, "y", { duration: 0.5, ease: "power3.out" });

        const handleMouseMove = (e) => {
            const correctedX = e.clientX / 0.9;
            const correctedY = e.clientY / 0.9;

            xTo(correctedX);
            yTo(correctedY);
            xToBorder(correctedX);
            yToBorder(correctedY);
        };

        // CORREÇÃO: mousedown para o efeito de clique
        const handleMouseDown = () => {
            gsap.to([cursor, cursorBorder], { scale: 0.6, duration: 0.2 });
        };

        const handleMouseUp = () => {
            gsap.to([cursor, cursorBorder], { scale: 1, duration: 0.2 });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Limpeza de TODOS os eventos
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            <div ref={cursorRef} className="custom-cursor-dot" />
            <div ref={cursorBorderRef} className="custom-cursor-border" />
        </>
    );
};

export default CustomCursor;