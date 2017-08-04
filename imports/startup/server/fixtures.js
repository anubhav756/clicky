import Colors, { ALL_COLORS } from '../../api/colors/colors';

if (!Colors.find().count()) {
  ALL_COLORS.forEach(name => Colors.insert({ name }));
}
