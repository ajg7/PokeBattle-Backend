--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

-- Started on 2021-02-05 22:15:34

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
-- TOC entry 212 (class 1259 OID 34558)
-- Name: battles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.battles (
    id integer NOT NULL,
    "user_Id" integer NOT NULL,
    "team_Id" integer NOT NULL,
    player_score integer DEFAULT 0,
    challenger_score integer DEFAULT 0
);


ALTER TABLE public.battles OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 34556)
-- Name: battles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.battles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.battles_id_seq OWNER TO postgres;

--
-- TOC entry 3023 (class 0 OID 0)
-- Dependencies: 211
-- Name: battles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.battles_id_seq OWNED BY public.battles.id;


--
-- TOC entry 2879 (class 2604 OID 34561)
-- Name: battles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.battles ALTER COLUMN id SET DEFAULT nextval('public.battles_id_seq'::regclass);


--
-- TOC entry 3017 (class 0 OID 34558)
-- Dependencies: 212
-- Data for Name: battles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.battles (id, "user_Id", "team_Id", player_score, challenger_score) FROM stdin;
\.


--
-- TOC entry 3024 (class 0 OID 0)
-- Dependencies: 211
-- Name: battles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.battles_id_seq', 1, false);


--
-- TOC entry 2883 (class 2606 OID 34565)
-- Name: battles battles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.battles
    ADD CONSTRAINT battles_pkey PRIMARY KEY (id);


--
-- TOC entry 2885 (class 2606 OID 34571)
-- Name: battles battles_team_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.battles
    ADD CONSTRAINT battles_team_id_foreign FOREIGN KEY ("team_Id") REFERENCES public.teams(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2884 (class 2606 OID 34566)
-- Name: battles battles_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.battles
    ADD CONSTRAINT battles_user_id_foreign FOREIGN KEY ("user_Id") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2021-02-05 22:15:34

--
-- PostgreSQL database dump complete
--

