import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";

// Secondary pages load on demand to keep the first paint light.
const About = lazy(() => import("./pages/About.jsx"));
const Wellness = lazy(() => import("./pages/Wellness.jsx"));
const WellnessTopic = lazy(() => import("./pages/WellnessTopic.jsx"));
const Coaching = lazy(() => import("./pages/Coaching.jsx"));
const Teachings = lazy(() => import("./pages/Teachings.jsx"));
const Shop = lazy(() => import("./pages/Shop.jsx"));
const ProductDetail = lazy(() => import("./pages/ProductDetail.jsx"));
const Give = lazy(() => import("./pages/Give.jsx"));
const Events = lazy(() => import("./pages/Events.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="wellness" element={<Wellness />} />
        <Route path="wellness/:topic" element={<WellnessTopic />} />

        <Route path="coaching" element={<Coaching />} />

        <Route path="teachings" element={<Teachings />} />
        <Route path="teachings/:group" element={<Teachings />} />

        <Route path="shop" element={<Shop />} />
        <Route path="shop/category/:category" element={<Shop />} />
        <Route path="shop/:slug" element={<ProductDetail />} />

        <Route path="give" element={<Give />} />
        <Route path="events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
