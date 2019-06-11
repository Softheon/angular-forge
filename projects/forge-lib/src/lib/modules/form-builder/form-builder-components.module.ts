import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileUploadModule } from 'ng2-file-upload';

import { TextFieldComponent } from '../../shared/form-components/concrete/text-field/text-field.component';
import { ForgeComponent } from '../../shared/form-components/concrete/forge-component/forge-component.component';
import { NumberComponent } from '../../shared/form-components/concrete/number/number.component';
import { TextAreaComponent } from '../../shared/form-components/concrete/text-area/text-area.component';
import { CheckboxComponent } from '../../shared/form-components/concrete/checkbox/checkbox.component';
import { RatingComponent } from '../../shared/form-components/concrete/rating/rating.component';
import { EmailComponent } from '../../shared/form-components/concrete/email/email.component';
import { AttachmentComponent } from '../../shared/form-components/concrete/attachment/attachment.component';
import { ForgeRendererComponent } from '../../shared/form-components/concrete/forge-renderer-component/forge-renderer-component.component';
import { MultiSelectComponent } from '../../shared/form-components/concrete/multi-select/multi-select-component';

import { NumberDirective } from '../../shared/directives/number.directive';
import { MaxValidatorDirective } from '../../shared/validators/maxValidator';
import { MinValidatorDirective } from '../../shared/validators/minValidator';
import { CurrencyComponent } from '../../shared/form-components/concrete/currency/currency.component';
import { DateTimeComponent } from '../../shared/form-components/concrete/date-time/date-time.component';
import { PhoneNumberComponent } from '../../shared/form-components/concrete/phone-number/phone-number.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FileUploadModule
    ],
    declarations: [
        TextFieldComponent,
        ForgeComponent,
        ForgeRendererComponent,
        NumberComponent,
        TextAreaComponent,
        CheckboxComponent,
        RatingComponent,
        EmailComponent,
        NumberDirective,
        MaxValidatorDirective,
        MinValidatorDirective,
        AttachmentComponent,
        MultiSelectComponent,
        CurrencyComponent,
        DateTimeComponent,
        PhoneNumberComponent
    ],
    exports: [
        TextFieldComponent,
        ForgeComponent,
        ForgeRendererComponent,
        NumberComponent,
        TextAreaComponent,
        CheckboxComponent,
        RatingComponent,
        EmailComponent,
        NumberDirective,
        MaxValidatorDirective,
        MinValidatorDirective,
        AttachmentComponent,
        MultiSelectComponent,
        CurrencyComponent,
        DateTimeComponent,
        PhoneNumberComponent
    ],
    entryComponents: [
        TextFieldComponent,
        ForgeComponent,
        ForgeRendererComponent,
        NumberComponent,
        TextAreaComponent,
        CheckboxComponent,
        RatingComponent,
        EmailComponent,
        AttachmentComponent,
        MultiSelectComponent,
        CurrencyComponent,
        DateTimeComponent,
        PhoneNumberComponent
    ]
})
export class FormBuilderComponentsModule { }
