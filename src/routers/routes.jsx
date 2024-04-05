import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TabsComponent } from "../pages/Components/TabsComponent.jsx";
import { ToggleComponent } from "../pages/Components/ToggleComponent.jsx";
import { RadioButtonComponent } from "../pages/Components/RadioButtonComponent.jsx";
import { CheckboxComponent } from "../pages/Components/CheckboxComponent.jsx";
import { NumberInputComponent } from "../pages/Components/NumberInputComponent.jsx";
import {ContentSwitcherComponent} from "../pages/Components/ContentSwitcherComponent.jsx"
import {AccordionComponent} from "../pages/Components/AccordionComponent.jsx"
import {ButtonComponent} from "../pages/Components/ButtonComponnet.jsx"
import {LoadingComponent} from "../pages/Components/LoadingComponent.jsx"
import {TextAreaComponent} from "../pages/Components/TextAreaComponent.jsx"
import {PaginationComponent } from "../pages/Components/PaginationComponent.jsx";
import { RemovableTagsComponent } from "../pages/Components/RemovableTagsComponent.jsx";
import {ToolTipComponent } from "../pages/Components/ToolTipComponent.jsx";
import { LinkComponent } from "../pages/Components/LinkComponent.jsx";
import { IconButtonComponent } from "../pages/Components/IconButtonComponent.jsx";
import { TextInputComponent } from "../pages/Components/TextInputComponent.jsx";
import { ProgressBarComponent} from "../pages/Components/ProgressBarComponent.jsx";
import { DatePickerComponent } from "../pages/Components/DatePickerComponent.jsx";
import { SliderDosComponent } from "../pages/Components/SliderDosComponent.jsx";
import { IconosPaisesComponent } from "../pages/Components/IconosPaisesComponent.jsx";
import { TagComponent } from "../pages/Components/TagComponent.jsx";
import { SliderUnoComponent } from "../pages/Components/SliderUnoComponent.jsx";
import { SearchComponente } from "../pages/Components/SearchComponente.jsx";
import { AvatarComponent } from "../pages/Components/AvatarComponent.jsx";
import { BreadcrumbsComponent } from "../pages/Components/BreadcrumbsComponent.jsx";

export function MyRoutes() {
  return (
   

      <Routes>
        <Route path="/accordion" element={<AccordionComponent />} />
        <Route path="/avatar" element={< AvatarComponent/>} />
        <Route path="/button" element={<ButtonComponent />} />
        <Route path="/breadcrumbs" element={< BreadcrumbsComponent />} />
        <Route path="/checkBox" element={<CheckboxComponent />} />
        <Route path="/contentSwitcher" element={<ContentSwitcherComponent  />} />
        <Route path="/datepicker" element={< DatePickerComponent/>} />
        <Route path="/iconbutton" element={< IconButtonComponent/>} />
        <Route path="/iconospaises" element={< IconosPaisesComponent/>} />
        <Route path="/link" element={< LinkComponent/>} />
        <Route path="/loading" element={<LoadingComponent />} />
        <Route path="/numberInput" element={<NumberInputComponent  />} />
        <Route path="/pagination" element={<PaginationComponent />} />
        <Route path="/progressbar" element={< ProgressBarComponent/>} />
        <Route path="/radioButton" element={<RadioButtonComponent />} />
        <Route path="/removabletags" element={<RemovableTagsComponent />} />
        <Route path="/search" element={< SearchComponente/>} />
        <Route path="/slideruno" element={< SliderUnoComponent/>} />
        <Route path="/sliderdos" element={< SliderDosComponent/>} />
        <Route path="/tag" element={< TagComponent/>} />
        <Route path="/tabs" element={<TabsComponent />} />
        <Route path="/textarea" element={<TextAreaComponent />} />
        <Route path="/textinput" element={<TextInputComponent />} />
        <Route path="/toggle" element={<ToggleComponent />} />
        <Route path="/tooltip" element={<ToolTipComponent/>} />
      </Routes>
    
  );
}
