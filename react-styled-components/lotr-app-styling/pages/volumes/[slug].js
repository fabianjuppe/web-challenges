import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "/lib/data";
import styled from "styled-components";
import ArrowLeft from "/icons/arrow-left.svg";
import ArrowRight from "/icons/arrow-right.svg";
import ChevronLeft from "/icons/chevron-left.svg";

export default function VolumeDetail() {
    const router = useRouter();
    const { slug } = router.query;

    const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

    const volume = volumes[volumeIndex];
    const previousVolume = volumes[volumeIndex - 1];
    const nextVolume = volumes[volumeIndex + 1];

    if (!volume) {
        return null;
    }

    const { title, description, cover, books, color } = volume;

    return (
        <>
            <StyledLink href="/volumes">
                <ChevronLeft /> All Volumes
            </StyledLink>
            <h1>{title}</h1>
            <p>{description}</p>
            <StyledVolume $color={color}>
                <StyledList>
                    {books.map(({ ordinal, title }) => (
                        <li key={title}>
                            <StyledBook>
                                {ordinal} <strong>{title}</strong>
                            </StyledBook>
                        </li>
                    ))}
                </StyledList>
                <Image
                    src={cover}
                    alt={`Cover image of ${title}`}
                    width={140}
                    height={230}
                />
            </StyledVolume>
            <Navigation>
                {previousVolume ? (
                    <div>
                        <StyledLink href={`/volumes/${previousVolume.slug}`}>
                            <ArrowLeft />
                            <StyledNavLink>
                                <strong>Previous Volume</strong>
                                {previousVolume.title}
                            </StyledNavLink>
                        </StyledLink>
                    </div>
                ) : null}
                {nextVolume ? (
                    <div>
                        <StyledLink href={`/volumes/${nextVolume.slug}`}>
                            <StyledNavLink>
                                <strong>Next Volume</strong>
                                {nextVolume.title}
                            </StyledNavLink>
                            <ArrowRight />
                        </StyledLink>
                    </div>
                ) : null}
            </Navigation>
        </>
    );
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: unset;
    display: flex;
    gap: 1rem;
`;

const StyledVolume = styled.div`
    padding: 1rem 1.5rem;
    display: flex;
    gap: 2rem;
    background-color: ${({ $color }) => $color};
`;

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const StyledBook = styled.div`
    display: flex;
    flex-direction: column;
`;

const Navigation = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const StyledNavLink = styled.div`
    display: flex;
    flex-direction: column;
`;
