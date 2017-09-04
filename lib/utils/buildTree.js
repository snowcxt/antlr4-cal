export default function buildTree(parser) {
    parser.buildParseTrees = true;
    return parser.prog();
}

