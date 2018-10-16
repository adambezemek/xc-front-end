export default {
    methods: {
        buildPaths(pages) {
            let paths = findPath('', pages);

            function findPath(currentPath, pages, list) {
                list = list || [];

                pages.forEach((page) => {
                    const hasChildren = typeof page.children !== 'undefined';
                    const newPath = `${currentPath}${page.path.startsWith('/', 0) ? '' : '/'}${page.path}`;

                    if(hasChildren) {
                        list.push({
                            name: page.name || page.path,
                            path: newPath,
                            children: []
                        });
                    } else if(!page.excludeFromNav) {
                        list[list.length - 1].children.push({
                            name: page.name || page.path,
                            path: newPath
                        });
                    }

                    if(hasChildren) {
                        findPath(newPath, page.children, list);
                    }
                });

                return list;
            }

            return paths;
        }
    }
};
