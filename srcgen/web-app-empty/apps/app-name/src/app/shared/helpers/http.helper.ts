import { Injectable } from '@angular/core';
import { HttpHelper } from '@rucken/core';

import { environment } from './../../../environments/environment';

@Injectable()
export class <%=app.classPrefix%>HttpHelper extends HttpHelper {
  direct = environment.type === 'mockapi';
}
