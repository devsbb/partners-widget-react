import { withStyleLoading } from '../src/hocs';

import { StockLevelEnum as STOCK_LEVEL_ENUM } from '../src/utils';

// Here we loads widgets without styles
import UnstyledWidget from '../src/widgets/defaultWidget';

// Here we apply style loader HOC to widgets
const Widget = withStyleLoading(UnstyledWidget);

export default Widget;
export { Widget, STOCK_LEVEL_ENUM };
