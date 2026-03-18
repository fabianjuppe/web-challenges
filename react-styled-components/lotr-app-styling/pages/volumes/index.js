import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";

export default function Volumes() {
    return (
        <>
            <h1>The Lord of the Rings</h1>
            <p>{introduction}</p>
            <h2>All Volumes</h2>
            <StyledList>
                {volumes.map((volume) => (
                    <li key={volume.id}>
                        <StyledLink href={`/volumes/${volume.slug}`}>
                            <Image
                                src={volume.cover}
                                alt={`Cover image of ${volume.title}`}
                                width={140}
                                height={230}
                            />
                            {volume.title}
                        </StyledLink>
                    </li>
                ))}
            </StyledList>
        </>
    );
}

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
