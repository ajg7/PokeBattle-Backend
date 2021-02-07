--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

-- Started on 2021-02-05 22:15:56

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 34396)
-- Name: team_members; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.team_members (
    "pokemon_Id" integer NOT NULL,
    "team_Id" integer NOT NULL,
    nickname character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public.team_members OWNER TO postgres;

--
-- TOC entry 3012 (class 0 OID 34396)
-- Dependencies: 210
-- Data for Name: team_members; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.team_members ("pokemon_Id", "team_Id", nickname) FROM stdin;
\.


--
-- TOC entry 2880 (class 2606 OID 34399)
-- Name: team_members team_members_pokemon_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.team_members
    ADD CONSTRAINT team_members_pokemon_id_foreign FOREIGN KEY ("pokemon_Id") REFERENCES public.pokemon(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2881 (class 2606 OID 34404)
-- Name: team_members team_members_team_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.team_members
    ADD CONSTRAINT team_members_team_id_foreign FOREIGN KEY ("team_Id") REFERENCES public.teams(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2021-02-05 22:15:56

--
-- PostgreSQL database dump complete
--

