export type ITreeNode = {
    id: number,
    father_id: number,
    status: boolean,
    name: string,
    _child?: ITreeNode[]
}

export let treeData:ITreeNode[] = [
    {
      id: 1,
      father_id: 0,
      status: false,
      name: '生命科学竞赛',
      _child: [
        {
          id: 2,
          father_id: 1,
          status: false,
          name: '野外实习类',
          _child: [{ id: 3, father_id: 2, status: false, name: '植物学' }],
        },
        {
          id: 7,
          father_id: 1,
          status: false,
          name: '科学研究类',
          _child: [
            { id: 8, father_id: 7, status: false, name: '植物学与植物生理学' },
            { id: 9, father_id: 7, status: false, name: '动物学与动物生理学' },
            { id: 10, father_id: 7, status: false, name: '微生物学' },
            { id: 11, father_id: 7, status: false, name: '生态学' },
          ],
        },
        { id: 71, father_id: 1, status: false, name: '添加' },
      ],
    },
    {
      id: 56,
      father_id: 0,
      status: false,
      name: '考研相关',
      _child: [
        { id: 57, father_id: 56, status: false, name: '政治' },
        { id: 58, father_id: 56, status: false, name: '外国语' },
      ],
    },
  ]